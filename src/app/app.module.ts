import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ContainerComponent, ItemComponent],
  imports: [BrowserModule]
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define('ngx-container', createCustomElement(ContainerComponent, { injector }));
    customElements.define('ngx-item', createCustomElement(ItemComponent, { injector }));
  }
  ngDoBootstrap() {}
}
