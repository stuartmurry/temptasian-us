import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
  ) {}

  logout() {
    this.afa.auth.signOut();
  }


}
