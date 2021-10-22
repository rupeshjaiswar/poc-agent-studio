import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import { AuthenticationService } from 'src/app/modules/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  displayPosition!: boolean;
  position!: string;

  public checked: boolean = false;
  displayMaximizable: boolean;

  bots!: MenuItem[];

  constructor( private authService: AuthenticationService,
                private router: Router ) { }
  items!: MenuItem[];

  ngOnInit(): void {


  }

  showDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  showInfo() {
    this.displayMaximizable = true;

  }

  checkedChange() {
    this.checked = true;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
