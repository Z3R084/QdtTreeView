import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeViewItem } from './tree-view-item.model';

@Component({
    selector: 'tree-view-item',
		templateUrl: './tree-view-item.component.html'
})

export class TreeViewItemComponent {
    @Input() treeViewItem: TreeViewItem;
    @Output() selectedItemChanged = new EventEmitter<Object>();
    isOpen: boolean = false;
    constructor() {
        console.log(this.treeViewItem);
    }
    onSelected(item: Object) {
        this.selectedItemChanged.emit(item);
    }
}