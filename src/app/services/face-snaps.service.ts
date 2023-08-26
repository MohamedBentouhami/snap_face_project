import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Bruxelles"
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 47
    }];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  getFaceSnap(faceSnapId: number) {
    const faceSnap = this.faceSnaps.find(snap => snap.id = faceSnapId);
    if (!faceSnap) {
      throw new Error("No face Snap found")
    } else {
      return faceSnap;
    }

  }

  snapFaceSnapById(faceSnapedId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnap(faceSnapedId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}

