import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { Subject, interval, map, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;

  }
  ngOnDestroy(): void {

  }

}
