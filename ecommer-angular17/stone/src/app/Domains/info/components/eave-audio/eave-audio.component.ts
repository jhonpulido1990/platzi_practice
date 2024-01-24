import { AfterViewInit, Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
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
  @ViewChild('wave') container!: ElementRef;
  private ws !: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(): void {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false))
  }

  playPause() {
  this.ws.playPause();
  }
}
