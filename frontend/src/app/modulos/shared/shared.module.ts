import { NgModule } from '@angular/core';

import { HeaderMediumComponent } from './components/headerMedium.component';

@NgModule({
  declarations: [
    HeaderMediumComponent
  ],
  exports: [
    HeaderMediumComponent
  ]
})
export class SharedModule {}