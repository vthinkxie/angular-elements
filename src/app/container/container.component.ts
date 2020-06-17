import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './container.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
