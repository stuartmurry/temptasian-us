import { Observable } from "rxjs/Observable";
  


export class Register {
    Specials : Special[];
    Receipt : Receipt;
    Categories : Category[];
}

// export interface Categories {
//     [index : string] : Category
// }

export interface Special {
    SpecialID : number;
    Name :string;
    Label : string;
    Categories : Category[];
    IsSelected? : boolean;
    Description : string;
}

export interface Category {
    Name : string;
    Label : string;
    MenuItems : MenuItem[];
} 

export interface MenuItem {
    ID : number;
    Name : string;
    Label : string;
    ReceiptLabel : string;
    Price : number;
}

export interface Receipt {
    ReceiptItems : ReceiptItem[]
}

export interface ReceiptItem {
    MenuItem : MenuItem
}
