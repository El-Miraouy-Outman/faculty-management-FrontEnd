import { Component } from '@angular/core';
import {navItems} from "./containers/default-layout/_nav";
import {NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {IconSetService} from "@coreui/icons-angular";
import {iconSubset} from "./icons/icon-subset";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managment-faculy-front';
  protected readonly navItems = navItems;

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
