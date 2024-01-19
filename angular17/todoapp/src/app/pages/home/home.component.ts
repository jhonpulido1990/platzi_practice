import {
  Component,
  Injector,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  task = signal<Task[]>([]);
  filter = signal<'all' | 'pending' | 'completed'>('all');

  taskByFilter = computed(() => {
    const filter = this.filter();
    const task = this.task();
    if (filter === 'pending') {
      return task.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return task.filter((task) => task.completed);
    }
    return task;
  });

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  injector = inject(Injector);

  ngOnInit(): void {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.task.set(tasks);
    }
    this.trackTask();
  }

  trackTask() {
    effect(() => {
      const tasks = this.task();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, { injector: this.injector });
  }

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.task.update((tasks) => [...tasks, newTask]);
  }

  /* statusTask(index: number) {
    this.task.update(task => {
      task[index] && (task[index].completed = !task[index].completed); return task
    })
    console.log(this.task())
  } */

  statusTask(index: number) {
    this.task.update((tasks) => {
      return tasks.map((tas, position) => {
        if (position === index) {
          return {
            ...tas,
            completed: !tas.completed,
          };
        }
        return tas;
      });
    });
  }

  updateTaskEditingMode(index: number) {
    this.task.update((tasks) => {
      return tasks.map((tas, position) => {
        if (position === index) {
          return {
            ...tas,
            editing: true,
          };
        }
        return {
          ...tas,
          editing: false,
        };
      });
    });
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.task.update((tasks) => {
      return tasks.map((tas, position) => {
        if (position === index) {
          return {
            ...tas,
            title: input.value,
            editing: false,
          };
        }
        return tas;
      });
    });
  }

  deleteTask(index: number) {
    this.task.update((tasks) =>
      tasks.filter((tas, position) => position !== index)
    );
  }

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }
}
