import { Component, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { TreeViewModel } from './tree-view.model';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [TreeViewModel]
})

export class TreeViewComponent implements OnChanges {
    constructor(public treeModel: TreeViewModel) { }

    @Input() set treeItems(treeItems: any[]) { }

    ngOnChanges(changes) {
        this.treeModel.setData({ treeItems: changes.treeItems && changes.treeItems.currentValue });
    }
}