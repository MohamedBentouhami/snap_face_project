import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText: string = "Oh Snap!";

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapService.getFaceSnap(snapId);
  }

  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un snap!'
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }

}

