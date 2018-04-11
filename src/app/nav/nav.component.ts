import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private afa: AngularFireAuth
  ) {}

  ngOnInit() {

  }

  @Input() name: string = "<Not Set>";

  logout() {
    this.afa.auth.signOut();
  }



  
}
