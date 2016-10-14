import { Component, OnChanges, Input } from '@angular/core';
import { TreeViewModel } from './tree-view.model';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    providers: [TreeViewModel]
})

export class TreeViewComponent implements OnChanges {
    treeViewItems: Object[];
    constructor(public treeModel: TreeViewModel) { }

    @Input() set treeItems(treeItems: any[]) { }

    ngOnChanges(changes) {
        this.treeModel.setData({ treeItems: changes.treeItems && changes.treeItems.currentValue });
    }
}