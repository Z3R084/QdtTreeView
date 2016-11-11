import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeViewItemComponent } from './tree-view-item/tree-view-item.component';
import { TreeViewDropSlot } from './tree-view-drop-slot/tree-view-drop-slot.component';

@NgModule({
    declarations: [
        AppComponent,
        TreeViewComponent,
        TreeViewItemComponent,
        TreeViewDropSlot
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DragulaModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
