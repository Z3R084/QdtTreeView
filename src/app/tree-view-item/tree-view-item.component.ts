import { Component, Input } from '@angular/core';

@Component({
    selector: 'tree-view-item',
		templateUrl: './tree-view-item.component.html'
})

export class TreeViewItemComponent {
    @Input() treeViewItem: Object;
    isOpen: boolean = false;
    constructor() { }
}