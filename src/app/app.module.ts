import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    User1Component,
    User2Component,
    User3Component,
    InterpolationComponent,
    BindingsComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
