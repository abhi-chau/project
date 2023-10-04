import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {  FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';
import { InputvalidationComponent } from './inputvalidation/inputvalidation.component';
import { ModelformComponent } from './modelform/modelform.component';
import { BuildingformComponent } from './buildingform/buildingform.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { DxButtonModule } from 'devextreme-angular';
import { DevExtrimeComponent } from './dev-extrime/dev-extrime.component';
import { DxTreeMapModule } from 'devextreme-angular';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { CustomdemoComponent } from './customdemo/customdemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { ShopComponent } from './shop/shop.component';
import { DxTextBoxModule } from 'devextreme-angular';
import { ForpropertiesComponent } from './forproperties/forproperties.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DxPopupModule, DxTemplateModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    HomeComponent,
    NotfoundComponent,
    TemplateformComponent,
    InputvalidationComponent,
    ModelformComponent,
    BuildingformComponent,
    RxjsLearningComponent,
    DevExtrimeComponent,
    ObservabledemoComponent,
    DirectivedemoComponent,
    CustomdemoComponent,
    ParentComponent,
    ChildComponent,
    EventdemoComponent,
    ShopComponent,
    ForpropertiesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxTreeMapModule,
    DxTextBoxModule,
    DxPopupModule,
    DxTemplateModule 
  ],
  providers: [],
  bootstrap: [  BuildingformComponent]
})
export class AppModule { }
