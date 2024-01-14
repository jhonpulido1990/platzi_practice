import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  task = signal<Task[]>([
    {
      id: Date.now(),
      title: 'crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'crear componentes',
      completed: false
    },
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
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
            completed: !tas.completed
          }
        }
        return tas
      })
    })
  }

  deleteTask(index: number) {
    this.task.update((tasks) => tasks.filter((tas, position)=> position !== index))
  }
}
