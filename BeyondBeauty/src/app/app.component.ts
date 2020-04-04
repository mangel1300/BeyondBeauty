import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'proyecto';
  itemCollection : AngularFirestoreCollection<any>;
  items : Observable<any[]>;
  itemValue = '';

  constructor(){

    }

    onSubmit(){

    }
}
