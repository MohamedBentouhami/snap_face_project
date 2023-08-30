import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FaceSnapService {

  constructor(private http: HttpClient) {

  }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }
  getFaceSnap(faceSnapId: number) {
    const faceSnap = this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    if (!faceSnap) {
      throw new Error("No face Snap found")
    } else {
      return faceSnap;
    }

  }

  snapFaceSnapById(faceSnapedId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnap(faceSnapedId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/${faceSnapedId}`,
        updatedFaceSnap)
      )
    );


  }
  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => ({
        ...formValue,
        snaps: 0,
        createdDate : new Date(),
        id: faceSnaps[faceSnaps.length - 1].id + 1,
      }
      )),
      switchMap(newSnapFaced => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newSnapFaced)
      )
    );
  }

}

