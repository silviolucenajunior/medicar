import { NgModule } from '@angular/core';

import { HeaderMediumComponent } from './components/headerMedium.component';
import { TopBarComponent } from './components/topBar.component';
import { TogglePasswordVisibilityDirective } from './shared.directives';
@NgModule({
  declarations: [
    HeaderMediumComponent,
    TopBarComponent,
    TogglePasswordVisibilityDirective
  ],
  exports: [
    HeaderMediumComponent,
    TopBarComponent,
    TogglePasswordVisibilityDirective
  ]
})
export class SharedModule {}