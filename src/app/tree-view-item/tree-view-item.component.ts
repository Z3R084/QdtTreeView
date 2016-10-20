import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeViewItem } from './tree-view-item.model';

@Component({
    selector: 'tree-view-item',
    templateUrl: './tree-view-item.component.html',
    styleUrls: ['./tree-view-item.component.less']
})

export class TreeViewItemComponent {
    @Input() treeViewItem: TreeViewItem;
   
    constructor() {
        
    }

    onDragStart($event) {
        console.log('started drag');
    }

    onDragOver($event) {
        $event.preventDefault();
        console.log('drag over');
    }
}