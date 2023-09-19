import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent {
  public counter: number = 1;

  @Input() productDetail: any;

  constructor(private router: Router, private ngb: NgbModal) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngb.dismissAll();
      }
    });
  }
ngOnInit(){


}

public increment() {
  this.counter += 1;
}

public decrement() {
  if (this.counter > 1) {
    this.counter -= 1;
  }
}
}
