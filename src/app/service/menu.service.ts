import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuData() {
    return {
      Menu: {
        "1": {
          MenuItemID: 1,
          IsLunch: "",
          MenuItemName: "PEPPER CHICKEN WINGS",
          CategoryID: 1,
          Price: 5.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "2": {
          MenuItemID: 2,
          IsLunch: "",
          MenuItemName: "HONEY CHICKEN WINGS",
          CategoryID: 1,
          Price: 5.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "3": {
          MenuItemID: 3,
          IsLunch: true,
          MenuItemName: "FRIED SHRIMP",
          CategoryID: 1,
          Price: 4.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "4": {
          MenuItemID: 4,
          IsLunch: true,
          MenuItemName: "POTSTICKERS",
          CategoryID: 1,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "5": {
          MenuItemID: 5,
          IsLunch: true,
          MenuItemName: "CHICKEN EGG ROLL",
          CategoryID: 1,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "6": {
          MenuItemID: 6,
          IsLunch: true,
          MenuItemName: "VEGGIE EGG ROLLS",
          CategoryID: 1,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "7": {
          MenuItemID: 7,
          IsLunch: true,
          MenuItemName: "CREAM CHEESE WONTONS",
          CategoryID: 1,
          Price: 3.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "8": {
          MenuItemID: 8,
          IsLunch: true,
          MenuItemName: "HOT AND SOUR SOUP",
          CategoryID: 1,
          Price: 2.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "9": {
          MenuItemID: 9,
          IsLunch: true,
          MenuItemName: "CHICKEN CORN SOUP",
          CategoryID: 1,
          Price: 2.5,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "10": {
          MenuItemID: 10,
          IsLunch: "",
          MenuItemName: "WONTON SOUP",
          CategoryID: 1,
          Price: 3.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "11": {
          MenuItemID: 11,
          IsLunch: "",
          MenuItemName: "SINGAPORE RICE NOODLES",
          CategoryID: 2,
          Price: 9.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "12": {
          MenuItemID: 12,
          IsLunch: "",
          MenuItemName: "XIAMEN RICE NOODLES",
          CategoryID: 2,
          Price: 9.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "13": {
          MenuItemID: 13,
          IsLunch: "",
          MenuItemName: "BLACK PEPPER UDON",
          CategoryID: 2,
          Price: 9.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "14": {
          MenuItemID: 14,
          IsLunch: "",
          MenuItemName: "SEAFOOD UDON",
          CategoryID: 2,
          Price: 9.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "15": {
          MenuItemID: 15,
          IsLunch: "",
          MenuItemName: "BAKED PORK CHOP",
          CategoryID: 2,
          Price: 9.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "16": {
          MenuItemID: 16,
          IsLunch: "",
          MenuItemName: "YANG ZHOU FRIED RICE",
          CategoryID: 2,
          Price: 9.2,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "17": {
          MenuItemID: 17,
          IsLunch: true,
          MenuItemName: "ORANGE CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "18": {
          MenuItemID: 18,
          IsLunch: true,
          MenuItemName: "BAKED CHICKEN BREAST",
          CategoryID: 2,
          Price: 9.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "19": {
          MenuItemID: 19,
          IsLunch: true,
          MenuItemName: "TEMPTASIAN ORANGE CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "20": {
          MenuItemID: 20,
          IsLunch: true,
          MenuItemName: "LEMON CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "21": {
          MenuItemID: 21,
          IsLunch: true,
          MenuItemName: "SWEET & SOUR CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "22": {
          MenuItemID: 22,
          IsLunch: true,
          MenuItemName: "BBQ CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "23": {
          MenuItemID: 23,
          IsLunch: true,
          MenuItemName: "CURRY CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "24": {
          MenuItemID: 24,
          IsLunch: true,
          MenuItemName: "MUSHROOM CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "25": {
          MenuItemID: 25,
          IsLunch: true,
          MenuItemName: "KUNG PAO CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "26": {
          MenuItemID: 26,
          IsLunch: true,
          MenuItemName: "BLACK PEPPER CHICKEN",
          CategoryID: 3,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "27": {
          MenuItemID: 27,
          IsLunch: true,
          MenuItemName: "BROCCOLI CHICKEN",
          CategoryID: 3,
          Price: 8.99,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "28": {
          MenuItemID: 28,
          IsLunch: true,
          MenuItemName: "CASHEW CHICKEN",
          CategoryID: 3,
          Price: 8.99,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "29": {
          MenuItemID: 29,
          IsLunch: true,
          MenuItemName: "PEKING BEEF FILLET",
          CategoryID: 4,
          Price: 10.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "30": {
          MenuItemID: 30,
          IsLunch: true,
          MenuItemName: "BROCCOLI BEEF",
          CategoryID: 4,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "31": {
          MenuItemID: 31,
          IsLunch: true,
          MenuItemName: "BLACK PEPPER BEEF",
          CategoryID: 4,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "32": {
          MenuItemID: 32,
          IsLunch: true,
          MenuItemName: "BRAISED BEEF STEW",
          CategoryID: 4,
          Price: 9.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "33": {
          MenuItemID: 33,
          IsLunch: true,
          MenuItemName: "BBQ PORK",
          CategoryID: 5,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "34": {
          MenuItemID: 34,
          IsLunch: true,
          MenuItemName: "HONEY PORK CHOPS",
          CategoryID: 5,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "35": {
          MenuItemID: 35,
          IsLunch: true,
          MenuItemName: "GINGER & GARLIC PORK CHOPS",
          CategoryID: 5,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "36": {
          MenuItemID: 36,
          IsLunch: true,
          MenuItemName: "SWEET & SOUR PORK",
          CategoryID: 5,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "37": {
          MenuItemID: 37,
          IsLunch: true,
          MenuItemName: "WALNUT SHRIMP ",
          CategoryID: 6,
          Price: 10.69,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "38": {
          MenuItemID: 38,
          IsLunch: "",
          MenuItemName: "BRAISED FILLET FISH",
          CategoryID: 6,
          Price: 9.99,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "39": {
          MenuItemID: 39,
          IsLunch: true,
          MenuItemName: "MIXED VEGETABLES",
          CategoryID: 7,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "40": {
          MenuItemID: 40,
          IsLunch: true,
          MenuItemName: "STRING BEANS",
          CategoryID: 7,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "41": {
          MenuItemID: 41,
          IsLunch: "",
          MenuItemName: "SPICY TOFU",
          CategoryID: 7,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "42": {
          MenuItemID: 42,
          IsLunch: "",
          MenuItemName: "BRAISED TOFU",
          CategoryID: 7,
          Price: 8.49,
          MenuItemDescr: "",
          IsGlutenFree: true
        },
        "43": {
          MenuItemID: 43,
          IsLunch: "",
          MenuItemName: "NEW YORK CHEESE CAKE",
          CategoryID: 8,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "44": {
          MenuItemID: 44,
          IsLunch: "",
          MenuItemName: "MANGO MOUSSE CAKE",
          CategoryID: 8,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "45": {
          MenuItemID: 45,
          IsLunch: "",
          MenuItemName: "TRIPLE CHOCOLATE MOUSSE CAKE",
          CategoryID: 8,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "46": {
          MenuItemID: 46,
          IsLunch: "",
          MenuItemName: "CHOCOLATE CAKE",
          CategoryID: 8,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "47": {
          MenuItemID: 47,
          IsLunch: "",
          MenuItemName: "CHOCOLATE MOLTEN CAKE",
          CategoryID: 8,
          Price: 4.5,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "48": {
          MenuItemID: 48,
          IsLunch: "",
          MenuItemName: "CINNAMON STRIPS",
          CategoryID: 8,
          Price: 1.6,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "49": {
          MenuItemID: 49,
          IsLunch: "",
          MenuItemName: "PRAWN CRACKERS",
          CategoryID: 8,
          Price: 1.6,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "50": {
          MenuItemID: 50,
          IsLunch: true,
          MenuItemName: "CHOW MEIN",
          CategoryID: 9,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "51": {
          MenuItemID: 51,
          IsLunch: true,
          MenuItemName: "FRIED RICE",
          CategoryID: 9,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "52": {
          MenuItemID: 52,
          IsLunch: true,
          MenuItemName: "RICE NOODLES",
          CategoryID: 9,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "53": {
          MenuItemID: 53,
          IsLunch: true,
          MenuItemName: "JASMINE RICE",
          CategoryID: 9,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "54": {
          MenuItemID: 54,
          IsLunch: true,
          MenuItemName: "BROWN RICE",
          CategoryID: 9,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "55": {
          MenuItemID: 55,
          IsLunch: true,
          MenuItemName: "ASSORTED BOTTLE DRINKS",
          CategoryID: 10,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "56": {
          MenuItemID: 56,
          IsLunch: true,
          MenuItemName: "BOTTLED WATER",
          CategoryID: 10,
          Price: 1.79,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "57": {
          MenuItemID: 57,
          IsLunch: true,
          MenuItemName: "SMALL FOUNTAIN DRINK",
          CategoryID: 10,
          Price: 1.79,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "58": {
          MenuItemID: 58,
          IsLunch: true,
          MenuItemName: "MEDIUM FOUNTAIN DRINK",
          CategoryID: 10,
          Price: 1.99,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "59": {
          MenuItemID: 59,
          IsLunch: true,
          MenuItemName: "LARGE FOUNTAIN DRINK",
          CategoryID: 10,
          Price: 2.19,
          MenuItemDescr: "",
          IsGlutenFree: ""
        },
        "60": {
          MenuItemID: 60,
          IsLunch: true,
          MenuItemName: "SPECIAL REQUEST",
          CategoryID: 1,
          Price: 0,
          MenuItemDescr: "",
          IsGlutenFree: true
        }
      },
      Categories: {
        "1": {
          CategoryID: 1,
          CategoryName: "Appetizer",
          SortOrder: 5
        },
        "2": {
          CategoryID: 2,
          CategoryName: "Chef's Special",
          SortOrder: 4
        },
        "3": {
          CategoryID: 3,
          CategoryName: "Chicken",
          SortOrder: 2
        },
        "4": {
          CategoryID: 4,
          CategoryName: "Beef",
          SortOrder: 3
        },
        "5": {
          CategoryID: 5,
          CategoryName: "Pork",
          SortOrder: 4
        },
        "6": {
          CategoryID: 6,
          CategoryName: "Seafood",
          SortOrder: 6
        },
        "7": {
          CategoryID: 7,
          CategoryName: "Vegetables",
          SortOrder: 7
        },
        "8": {
          CategoryID: 8,
          CategoryName: "Dessert",
          SortOrder: 8
        },
        "9": {
          CategoryID: 9,
          CategoryName: "Sides",
          SortOrder: 1
        },
        "10": {
          CategoryID: 10,
          CategoryName: "Drinks",
          SortOrder: 9
        }
      },
      Specials: {
        "1": {
          SpecialID: 1,
          Price: 8.49,
          IsMenuPrice: "",
          SpecialName: "TWO ITEM COMBO",
          PortionWeight: 0.5,
          AdditionalMenuPricing: "32=1;38=1;29=1",
          AdditionalCategoryPricing: "",
          SpecialDescription: "2 Items + 1 Side",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 2,
          IncludedSideCount: 1
        },
        "2": {
          SpecialID: 2,
          Price: 9.99,
          IsMenuPrice: "",
          SpecialName: "THREE ITEM COMBO",
          PortionWeight: 0.5,
          AdditionalMenuPricing: "32=1;38=1;29=1",
          AdditionalCategoryPricing: "",
          SpecialDescription: "3 Items + 1 Side",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 3,
          IncludedSideCount: 1
        },
        "3": {
          SpecialID: 3,
          Price: 4.99,
          IsMenuPrice: "",
          SpecialName: "KIDS MEAL",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "1 Items + 1 Side",
          EntreeList: "3,4",
          ShowCategoryList: "3,4,9",
          ExcludedMenuList: "18,23,25,26,27,28,29,31,32,32",
          SideCategory: 9,
          IncludedEntreeCount: 1,
          IncludedSideCount: 1
        },
        "4": {
          SpecialID: 4,
          Price: 38,
          IsMenuPrice: "",
          SpecialName: "FAMILY DINNER",
          PortionWeight: 1.5,
          AdditionalMenuPricing: "32=2;38=2;29=2",
          AdditionalCategoryPricing: "",
          SpecialDescription: "3 Items + 2 Sides",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 3,
          IncludedSideCount: 2
        },
        "5": {
          SpecialID: 5,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "ALA CARTE",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "Unlimited Entree +1 Side",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: -1,
          IncludedSideCount: 1
        },
        "6": {
          SpecialID: 6,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "CHEF'S SPECIAL",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "Unlimited Chef",
          EntreeList: 2,
          ShowCategoryList: 2,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: -1,
          IncludedSideCount: 0
        },
        "7": {
          SpecialID: 7,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "DRINKS",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "Unlimited Drinks",
          EntreeList: 10,
          ShowCategoryList: 10,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: -1,
          IncludedSideCount: 0
        },
        "8": {
          SpecialID: 8,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "DESSERT",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "Unlimite Desert",
          EntreeList: 8,
          ShowCategoryList: 8,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: -1,
          IncludedSideCount: 0
        },
        "9": {
          SpecialID: 9,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "SIDES",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "Unlimited Sides",
          EntreeList: 9,
          ShowCategoryList: 9,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: -1,
          IncludedSideCount: 0
        },
        "10": {
          SpecialID: 10,
          Price: 115,
          IsMenuPrice: "",
          SpecialName: "16 People",
          PortionWeight: 6,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "2 Items + 2 Sides + 16 Veggies",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 2,
          IncludedSideCount: 2
        },
        "11": {
          SpecialID: 11,
          Price: 160,
          IsMenuPrice: "",
          SpecialName: "24 People",
          PortionWeight: 6,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "3 Items + 3 Sides",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 2,
          IncludedSideCount: 2
        },
        "12": {
          SpecialID: 12,
          Price: 205,
          IsMenuPrice: "",
          SpecialName: "32 People",
          PortionWeight: 6,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "4 Items + 4 Sides",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7,9",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 2,
          IncludedSideCount: 2
        },
        "13": {
          SpecialID: 13,
          Price: 42,
          IsMenuPrice: "",
          SpecialName: "Single Party Tray",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "1 Items",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7",
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: 1,
          IncludedSideCount: 0
        },
        "14": {
          SpecialID: 14,
          Price: 42,
          IsMenuPrice: "",
          SpecialName: "Single Party Side",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "1 Side",
          EntreeList: 9,
          ShowCategoryList: 9,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: 1,
          IncludedSideCount: 0
        },
        "15": {
          SpecialID: 15,
          Price: "",
          IsMenuPrice: true,
          SpecialName: "APPETZRS",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "",
          EntreeList: 1,
          ShowCategoryList: 1,
          ExcludedMenuList: "",
          SideCategory: "",
          IncludedEntreeCount: -1,
          IncludedSideCount: 0
        },
        "16": {
          SpecialID: 16,
          Price: 7,
          IsMenuPrice: "",
          SpecialName: "DAILY SPECIAL",
          PortionWeight: 1,
          AdditionalMenuPricing: "",
          AdditionalCategoryPricing: "",
          SpecialDescription: "",
          EntreeList: "3,4,5,6,7",
          ShowCategoryList: "3,4,5,6,7",
          ExcludedMenuList: "",
          SideCategory: 9,
          IncludedEntreeCount: 1,
          IncludedSideCount: 1
        }
      },
      Commands: {
        "": {
          Name: "",
          Link: "",
          Notes: ""
        },
        "HOME PAGE": {
          Name: "HOME PAGE",
          Link: "http://temptasian-us.com",
          Notes: ""
        },
        "Update Menu": {
          Name: "Update Menu",
          Link: "http://temptasian-us.com/php/updatemenu.php",
          Notes:
            "When making changes to this menu, click on this link to update the website's menu"
        },
        "Refresh Menu": {
          Name: "Refresh Menu",
          Link: "http://temptasian-us.com/menu.json",
          Notes: "Test Menu Data"
        },
        "Test Google Docs (Menu)": {
          Name: "Test Google Docs (Menu)",
          Link:
            "https://docs.google.com/spreadsheets/d/1hFdlQYfEcVGOjBnCoHkdST4PPBSx-CO09SRQF9aChRM/pub?gid=0&single=true&output=csv",
          Notes: "Menu is updated via Google Docs"
        },
        "Get Daily Orders": {
          Name: "Get Daily Orders",
          Link:
            "http://temptasian-us.com/php/getdailyorderdata.php?OrderDate=2015-07-18",
          Notes: ""
        },
        "Get Order Data": {
          Name: "Get Order Data",
          Link: "http://temptasian-us.com/php/getorderdata.php?OrderId=5",
          Notes: ""
        },
        Kitchen: {
          Name: "Kitchen",
          Link: "http://temptasian-us.com/kitchen/kitchen.html",
          Notes: ""
        }
      },
      Additional: {
        "1": {
          AdditionalID: 1,
          AdditionalName: "Gluten Free",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: "9,19,20,21,27,28,29,30,36,37,38,39,42",
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "2": {
          AdditionalID: 2,
          AdditionalName: "* Spicy",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "3": {
          AdditionalID: 3,
          AdditionalName: "** Spicy",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "4": {
          AdditionalID: 4,
          AdditionalName: "*** Spicy",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "5": {
          AdditionalID: 5,
          AdditionalName: "Less Pepper",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "6": {
          AdditionalID: 6,
          AdditionalName: "More Pepper",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "7": {
          AdditionalID: 7,
          AdditionalName: "Extra S+S Sauce",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "8": {
          AdditionalID: 8,
          AdditionalName: "Extra Temptasian Sauce",
          AdditionalCost: 0.3,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "9": {
          AdditionalID: 9,
          AdditionalName: "Extra Lemon Sauce",
          AdditionalCost: 0.3,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "10": {
          AdditionalID: 10,
          AdditionalName: "Combine Meat",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "11": {
          AdditionalID: 11,
          AdditionalName: "Exchange Tofu",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "12": {
          AdditionalID: 12,
          AdditionalName: "No Nuts",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "13": {
          AdditionalID: 13,
          AdditionalName: "No Egg",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "14": {
          AdditionalID: 14,
          AdditionalName: "No Onion",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "15": {
          AdditionalID: 15,
          AdditionalName: "No Shrimp",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "16": {
          AdditionalID: 16,
          AdditionalName: "No Zucchini",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "17": {
          AdditionalID: 17,
          AdditionalName: "No Celery",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "18": {
          AdditionalID: 18,
          AdditionalName: "No Meat",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "19": {
          AdditionalID: 19,
          AdditionalName: "Tofu Sub",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        },
        "20": {
          AdditionalID: 20,
          AdditionalName: "Veg Sub",
          AdditionalCost: 0,
          IsSelected: false,
          IncludedMenuItems: -1,
          ExcludedCategoryIds: "",
          ExcludedMenuIds: ""
        }
      }
    };
  }

}
