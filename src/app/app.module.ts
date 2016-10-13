import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeViewItemComponent } from './tree-view-item/tree-view-item.component';
import { TreeViewSectionComponent } from './tree-view-section/tree-view-section.component';

@NgModule({
  declarations: [
      AppComponent,
      TreeViewComponent,
      TreeViewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
