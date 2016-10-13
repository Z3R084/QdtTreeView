import { Component, OnInit } from '@angular/core';
import { TreeViewModel } from './tree-view.model';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    providers: []
})

export class TreeViewComponent implements OnInit {
    treeViewItems: Object[];
    constructor(private treeModel: TreeViewModel) { }

    ngOnInit() {}
}