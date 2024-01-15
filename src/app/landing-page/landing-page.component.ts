import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
public text = "In future this pane should show each page";
  createBudget(){
    this.text = "creating budget";
  }

  showMyBudgets(){
    this.text = "showing budget";
  }

  showSharedBudgets(){
    this.text = "showing shared budget";
  }

  showAwards() {
    this.text = "showing awards"
  }
}
