import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Col, Row } from './utils/directives/bootstrap-grid.directive';
import { ApplyButtonComponent, HeaderComponent } from './header.component';
import { AboutComponent } from './about.component';
import { OrganizerComponent } from './organizer.component';
import { OrganizersComponent } from './organizers.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ApplyButtonComponent,
    Col,
    FooterComponent,
    HeaderComponent,
    OrganizerComponent,
    OrganizersComponent,
    Row,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
