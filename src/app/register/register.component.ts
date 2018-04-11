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
  specials: any;

  special: Special;

  clickSpecial(special: Special) {
    this.register.Specials.forEach(s => (s.IsSelected = false)); // Clear state
    special.IsSelected = true;
    // this.register.Categories = special.Categories;
    this.special = special;
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
    var data = this.menu.getMenuData();

    this.menuitems = Object.keys(data["Menu"]).map(mi => data["Menu"][mi]);
    this.categories = Object.keys(data["Categories"]).map(
      mi => data["Categories"][mi]
    );
    this.specials = Object.keys(data["Specials"]).map(
      mi => data["Specials"][mi]
    );

    console.log(this.specials);

    this.register = new Register();
    this.register.Receipt = { ReceiptItems: [] };

    this.register.Specials = this.specials.map(s => {
      // console.log(s);
      return {
        SpecialID: s.SpecialID,
        Name: s.SpecialName,
        Label: s.SpecialName,
        Description: s.SpecialDescription,
        Categories: (s.ShowCategoryList + "").split(",").map(categoryId => {
          var category = this.categories.filter(
            c => c.CategoryID == categoryId
          )[0];
          // console.log(category);
          return {
            Name: category.CategoryName,
            Label: category.CategoryName,
            MenuItems: this.menuitems
              .filter(mi => mi.CategoryID == category.CategoryID)
              .map(m => {
                return {
                  ID : m.MenuItemID,
                  Name: m.MenuItemName,
                  Label: m.MenuItemName,
                  ReceiptLabel: m.MenuItemName,
                  Price: m.Price
                };
              })
          };
        })
      };
    });

    console.log(this.register.Specials);
  }
}
