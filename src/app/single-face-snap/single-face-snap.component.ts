import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapService.getFaceSnap(snapId);
  }

  onAddSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(tap(() => {
        this.buttonText = 'Oops, un snap!'
      }));
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(tap(() => {
        this.buttonText = 'Oh Snap!'
      }));


    }

  }

}

