import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptListComponent } from './receipt/receipt-list/receipt-list.component';
import { ReceiptDetailComponent } from './receipt/receipt-detail/receipt-detail.component';
import { HeaderComponent } from './header/header.component';
import { ReceiptItemComponent } from './receipt/receipt-list/receipt-item/receipt-item.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceiptComponent,
    ReceiptListComponent,
    ReceiptDetailComponent,
    HeaderComponent,
    ReceiptItemComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
