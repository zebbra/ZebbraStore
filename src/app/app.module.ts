// Generic imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Custom components
import { ItemListComponent } from './item-list/item-list.component';

// Carbon modules
import { ButtonModule } from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';
import { StructuredListModule } from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent, ItemListComponent, HeaderComponent],
  // Import Carbon modules/compenents here again by hand, thx VSCode :).
  imports: [BrowserModule, ButtonModule, StructuredListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
