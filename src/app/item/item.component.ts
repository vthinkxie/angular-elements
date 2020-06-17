import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './item.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
