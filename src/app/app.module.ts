import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { NavBarComponent } from './Common/nav-bar/nav-bar.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressListItemComponent } from './address-list-item/address-list-item.component';
import { AddressItemViewComponent } from './address-item-view/address-item-view.component';
import { AddressItemEditComponent } from './address-item-edit/address-item-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    AddressListComponent,
    AddressListItemComponent,
    AddressItemViewComponent,
    AddressItemEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
