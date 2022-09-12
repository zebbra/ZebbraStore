import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "carbon-components-angular";
import { HeaderComponent } from "./header/header.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { NgModule } from "@angular/core";
import { StructuredListModule } from "carbon-components-angular";

@NgModule({
  declarations: [AppComponent, ItemListComponent, HeaderComponent],
  // Import Carbon modules/compenents here again by hand, thx VSCode :).
  imports: [BrowserModule, ButtonModule, StructuredListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
