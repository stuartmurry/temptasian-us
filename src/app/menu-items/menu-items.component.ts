import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.css"]
})
export class MenuItemsComponent implements OnInit {
  constructor(private afs: AngularFirestore) {}

  data: any;
  menuitems = [];

  clickImportData() {
    console.log(this.data)



    // console.log(this.data);

    // console.log("------------------");

    // // Add Menu Items
    // // Menu Items
    // Object.keys(this.data.Menu).forEach(m => {
    //   //console.log(this.data.Menu[m]);
    //   var menuItem = this.data.Menu[m];
    //   var d = this.afs.collection("menuitems").ref.doc();
    //   menuItem.id = d.id;

    //   var categoryID = 0; // only belongs to one category
    //   menuItem.Categories = {};
    //   Object.keys(this.data.Categories).forEach(c => {
    //     //console.log(this.data.Menu[m]);
    //     var category = this.data.Categories[c];

    //     if (menuItem.CategoryID == category.CategoryID) {
    //       categoryID = menuItem.CategoryID;
    //       menuItem.Categories[category.CategoryName] = category;
    //     }

    //   });

    //   // Process specials
    //   // console.log(this.data.Categories);
    //   menuItem.Specials = {};

    //   Object.keys(this.data.Specials).forEach(m => {
        

    //     //console.log(this.data.Menu[m]);
    //     var special = this.data.Specials[m];
    //     // console.log('special');
    //     // console.log(special);

    //     // menuItem.Specials[special.SpecialName] = special;
      
    //     if (special.EntreeList) {
    //       var e = (special.EntreeList + "").split(",").forEach(i => {
    //         if (parseInt(i) == categoryID) {
    //           menuItem.Specials[special.SpecialName] = special;
    //         }
    //       });
    //     }
    //   });

    //   console.log("saving menu item..");
    //   console.log(menuItem);

    //   this.afs.doc('/menuitems/' + menuItem.MenuItemName).set(menuItem);
    //   // d.set(menuItem);
    // });

    // Add Specials
    // Object.keys(this.data.Specials).forEach(m => {
    //   //console.log(this.data.Menu[m]);
    //   var menuItem = this.data.Specials[m];
    //   this.afs.collection('menuitems', ref => {
    //     return ref.where('size', '==', menuItems);
    //   });
    //   // this.data.Menu[m]
    //   console.log(menuItem);
    // });

    // Join menuItems
    // this.afs.collection('menuitems')
    // .snapshotChanges()
    // .map(s => s.map(t => { return { id: t.payload.doc.id, data: t.payload.doc.data() }} ))
    // .subscribe(m => m.forEach(tt => {
    //   var d = tt.data;
    //   d.id = tt.id;
    //   this.afs.doc('/menuitems/' + tt.id).update(d);
    // }));

    // Fix specials to point to menuItems
    // Object.keys(this.data.Specials).forEach(m => {
    //   //console.log(this.data.Menu[m]);
    //   var special = this.data.Specials[m];

    // this.data.Menu[m]
    // console.log(special);

    // special.Entrees = {};

    // var mItems = {};
    // if (special.EntreeList) {
    //   // console.log("Hello Menu Items");
    //   // console.log(special.EntreeList);
    //   var e = (special.EntreeList + '').split(',').forEach(i => {
    //     var asdf = this.menuitems.filter(x => x.MenuItemID == i)[0];
    //     // console.log('menu item:');
    //     // console.log(asdf.id);
    //     special.Entrees[asdf.id] = true;
    //   });
    // }

    // console.log(special);

    // this.afs
    //   .collection("menuitems")
    //   .snapshotChanges()
    //   .map(s =>
    //     s.map(t => {
    //       return { id: t.payload.doc.id, data: t.payload.doc.data() };
    //     })
    //   )
    //   .subscribe(m =>
    //     m.forEach(tt => {
    //       var d = tt.data;
    //       d.id = tt.id;
    //       this.afs.doc("/menuitems/" + tt.id).update(d);
    //     })
    //   );
    // });
  }

  ngOnInit() {
    var o = this.afs.collection("menuitems").valueChanges();
    o.subscribe(oo => (this.menuitems = oo));

    
  }
}
