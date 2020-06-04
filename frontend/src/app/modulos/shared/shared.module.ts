import { NgModule } from '@angular/core';

import { HeaderMediumComponent } from './components/headerMedium.component';
import { TopBarComponent } from './components/topBar.component';
@NgModule({
  declarations: [
    HeaderMediumComponent,
    TopBarComponent,
  ],
  exports: [
    HeaderMediumComponent,
    TopBarComponent
  ]
})
export class SharedModule {}