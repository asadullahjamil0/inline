import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { CounterComponent } from './counter/counter.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FornestedComponent } from './fornested/fornested.component';
import { BootsComponent } from './boots/boots.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { PipesComponent } from './pipes/pipes.component';

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
    StyleBindingComponent,
    TemplateReferenceComponent,
    CounterComponent,
    TwoWayComponent,
    NgIfComponent,
    NgswitchComponent,
    NgforComponent,
    FornestedComponent,
    BootsComponent,
    ChildComponent,
    Child2Component,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
