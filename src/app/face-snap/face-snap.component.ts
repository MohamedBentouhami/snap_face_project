import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent{
  @Input() faceSnap! : FaceSnap;
  buttonText: string = "Oh Snap!";


  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un snap!'
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }

}
