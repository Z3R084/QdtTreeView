import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeViewItem } from './tree-view-item.model';

@Component({
    selector: 'tree-view-item',
		templateUrl: './tree-view-item.component.html'
})

export class TreeViewItemComponent {
    @Input() treeViewItem: TreeViewItem;
   
    constructor() {
        
    }
}