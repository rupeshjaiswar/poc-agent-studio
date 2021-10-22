import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  items!: MenuItem[];
 
  ngOnInit() {  

    this.items = [
      {
        label: 'Dashboard',
        icon: 'dashboard-icon',
        routerLink: ['dashboard'],
        routerLinkActiveOptions: { exact: true },
        expanded: true
      }
      ,
      {
        label: 'Design',
        icon: 'design-icon',       
        items: [
          {
            label: 'NLU | AI Trainer',
            icon: 'nlu-icon', 
            items: [
              {
                label: 'Intent Management',
              },
              {
                label: 'Entity Management',
              },
              {
                label: 'NLU Settings',
              },
              {
                label: 'Optimizer',
              }
            ],          
            routerLink: ['/NLU'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Conversational Desiner',
            icon: 'cd-icon',          
            routerLink: ['/designer'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Integration Hive',
            icon: 'ih-icon',
            routerLink: ['/ih'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Testing',
            icon: 'testing-icon',
            routerLink: ['/testing'],
            routerLinkActiveOptions: { exact: true },
          }
        ]
      },
      {
        label: 'Deploy',
        icon: 'deploy-icon',
        routerLink: ['/deploy'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Analytics',
        icon: 'analytics-icon',
        routerLink: ['/analytics'],
        routerLinkActiveOptions: { exact: true },
      },
      
    ]    
  }

}
