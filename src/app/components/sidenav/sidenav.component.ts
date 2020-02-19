import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public path = '';
  constructor(public router: Router) { }

  ngOnInit() {
    this.path = window.location.pathname;
  }

  renderPages(path) {
    this.path = path;
    this.router.navigateByUrl(path)
  }
}
