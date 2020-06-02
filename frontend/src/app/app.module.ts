import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from './modulos/shared/shared.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { ConsultaModule } from './modulos/consulta/consulta.module';

import { AuthInterceptor } from './modulos/auth/auth.interceptors';
import { AuthGuard } from './modulos/auth/auth.guards';
import { TokenAuthService } from './modulos/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    UsuarioModule,
    ConsultaModule,
    AppRoutingModule
  ],
  providers: [
    TokenAuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
