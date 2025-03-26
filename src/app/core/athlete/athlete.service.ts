import { Injectable } from '@angular/core';
import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { FirestoreService } from 'src/app/firebase/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private db: FirestoreService) { }

  public async GetAthlete(id: string) {
    const athleteRef = doc(this.db.GetFirestore(), 'athletes', id);
    const athlete = await getDoc(athleteRef);
    return athlete.data();
  }

  public async CreateAthlete(id: string, athlete: any) {
    const athleteRef = collection(this.db.GetFirestore(), 'athletes');
    await setDoc(doc(athleteRef, id), athlete);
  }
}