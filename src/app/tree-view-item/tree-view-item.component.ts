import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeViewItem } from './tree-view-item.model';

@Component({
    selector: 'tree-view-item',
    templateUrl: './tree-view-item.component.html',
    styleUrls: ['./tree-view-item.component.less']
})

export class TreeViewItemComponent {
    @Input() treeViewItem: TreeViewItem;
    @Input() treeItemIndex: number;

    constructor() {

    }

    onDragStart($event) {
        setTimeout(() => this.treeViewItem.treeModel.setDragItem({ item: this.treeViewItem.parent, index: this.treeItemIndex }), 30);
    }

    onDragEnd() {
        this.treeViewItem.treeModel.setDragItem(null);
    }

    onDragOver($event) {
        $event.preventDefault();
        this.treeViewItem.treeModel.setDropLocation({ component: this, item: this.treeViewItem, index: this.treeItemIndex });
    }

    onDragLeave($event) {

    }
}