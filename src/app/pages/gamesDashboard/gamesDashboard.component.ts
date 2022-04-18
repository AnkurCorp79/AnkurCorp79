import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "game-dashboard",
  templateUrl: "gamesDashboard.component.html"
})
export class GamesDashboard implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openGamePage(){
    const returnUrl = '/gameDetails';
                    this.router.navigateByUrl(returnUrl);
  }
}
