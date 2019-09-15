import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'firebase';
import { UserInfo } from '../models/user-info';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserInfo: ReplaySubject<UserInfo> = new ReplaySubject(1);

  public getCurrentUserInfo(): Observable<UserInfo> {
    return this.currentUserInfo;
  }

  public logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private loadUserInfo(user: User): void {
    this.afs.collection("users").doc<UserInfo>(user.email).valueChanges().subscribe((userInfo) => {
      this.currentUserInfo.next(userInfo);
    });
  }

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    afAuth.user.subscribe((user) => {
      if(user){
        this.loadUserInfo(user);
      } else {
        this.currentUserInfo = null;
      }
    });
  }
}
