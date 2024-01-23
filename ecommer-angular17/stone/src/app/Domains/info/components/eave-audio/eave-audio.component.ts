import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-eave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eave-audio.component.html',
  styleUrl: './eave-audio.component.scss'
})
export class EaveAudioComponent implements AfterViewInit {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef

  ngAfterViewInit(): void {
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }
}
