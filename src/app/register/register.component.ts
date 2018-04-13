import { Component, OnInit } from "@angular/core";
import { Register, Category, Special, MenuItem } from "../app";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { MenuService } from "../service/menu.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private afs: AngularFirestore, private menu: MenuService) {}

  register: Register;

  menuitemsCollection: AngularFirestoreCollection<any>;
  menuitems$: Observable<any>;
  menuitems: any;
  categories: any;

  special: Special;

  clickSpecial(special: Special) {
    this.register.Specials.forEach(s => (s.IsSelected = false)); // Clear state
    special.IsSelected = true;
    
    // Filter menuitems by special
    this.special = special;
    var mis = this.menuitems.filter(mi => this.special.Name in mi.Specials);
    console.log('mis');
    console.log(mis);

    var CategoryDictionary = {}
    // Create a distinct category list of the current menu items for this special
    mis.map(mi => Object.keys(mi.Categories).forEach(k => CategoryDictionary[k] = true));
    console.log('CategoryDictionary');
    console.log(CategoryDictionary);
    // 
    special.Categories = Object.keys(CategoryDictionary).map(categoryName => { return {
      Name : categoryName,
      Label : categoryName,
      MenuItems : mis.filter(mi => categoryName in mi.Categories)
    }});

    console.log('this.register.Categories');
    console.log(special.Categories);
  }

  clickMenuItem(menuItem: MenuItem) {
    console.log("adding menuItme");
    console.log(menuItem);

    this.AddMenuItem(menuItem);
  }

  AddMenuItem(mi: MenuItem) {
    console.log("Adding Menu Items");
    this.register.Receipt.ReceiptItems.push({ MenuItem: mi });
    this.CalculateGroups();
  }

  CalculateGroups() {
    console.log('Calculating Group');
    let menuitemIds = this.register.Receipt.ReceiptItems.map(ri => ri.MenuItem.ID);
    console.log(menuitemIds);

  }

  ngOnInit() {

    this.menuitemsCollection = this.afs.collection('menu-items');
    this.menuitems$ = this.menuitemsCollection.valueChanges();

    this.register = new Register();

    this.menuitems$.subscribe(mis => {
      
      this.menuitems = mis;
      var specialDictionary = {};
      mis.forEach(mi => {
        Object.keys(mi.Specials).forEach(key => specialDictionary[key] = mi.Specials[key]);
      });

      this.register.Specials = Object.keys(specialDictionary).map(kk => { return {  
        Name : kk,
      }});

      console.log('this.register.Specials');
      console.log(this.register.Specials);

      this.register.Receipt = { ReceiptItems: [] };
      
      
    });

    // var data = this.menu.getMenuData();

    // this.menuitems = Object.keys(data["Menu"]).map(mi => data["Menu"][mi]);
    // this.categories = Object.keys(data["Categories"]).map(
    //   mi => data["Categories"][mi]
    // );
    // this.specials = Object.keys(data["Specials"]).map(
    //   mi => data["Specials"][mi]
    // );

    // console.log(this.specials);

    // this.register = new Register();
    // this.register.Receipt = { ReceiptItems: [] };

    // this.register.Specials = this.specials.map(s => {
    //   // console.log(s);
    //   return {
    //     SpecialID: s.SpecialID,
    //     Name: s.SpecialName,
    //     Label: s.SpecialName,
    //     Description: s.SpecialDescription,
    //     Categories: (s.ShowCategoryList + "").split(",").map(categoryId => {
    //       var category = this.categories.filter(
    //         c => c.CategoryID == categoryId
    //       )[0];
    //       // console.log(category);
    //       return {
    //         Name: category.CategoryName,
    //         Label: category.CategoryName,
    //         MenuItems: this.menuitems
    //           .filter(mi => mi.CategoryID == category.CategoryID)
    //           .map(m => {
    //             return {
    //               ID : m.MenuItemID,
    //               Name: m.MenuItemName,
    //               Label: m.MenuItemName,
    //               ReceiptLabel: m.MenuItemName,
    //               Price: m.Price
    //             };
    //           })
    //       };
    //     })
    //   };
    // });

    console.log(this.register.Specials);
  }
}
