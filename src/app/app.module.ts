import { environment } from '../environments/environment'

import { PubNubAngular } from "pubnub-angular2";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

// Zeekes
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


// Cloud Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { SteamComponent } from './steam/steam.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

// Services
import { AuthService } from "./service/auth.service";
import { MenuService } from './service/menu.service';

const appRoutes: Routes = [

  {
    path: "",
    redirectTo: "/register",
    pathMatch: "full"
  },

  { path: "kitchen", component: KitchenComponent },
  { path: "steam", component: SteamComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "menu-items", component: MenuItemsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    KitchenComponent,
    SteamComponent,
    MenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ChartsModule,
    FormsModule,
  ],
  //https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md
  providers: [PubNubAngular, AngularFirestore, AuthService,  MenuService], 
  bootstrap: [AppComponent]
})
export class AppModule {}
