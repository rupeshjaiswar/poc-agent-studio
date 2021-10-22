import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  public checked: boolean = false;
  displayMaximizable: boolean;

  // pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  createBot(): void {
    this.router.navigateByUrl("/create-bot/dashboard");
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

  showInfo() {
    this.displayMaximizable = true;
}

  checkedChange() {
    this.checked = true;
  }


}
