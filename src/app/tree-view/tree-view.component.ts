import { Component, OnInit } from '@angular/core';
import { TreeViewService } from '../tree-view.service';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    providers: [TreeViewService]
})

export class TreeViewComponent implements OnInit {
    treeViewItems: Object[];
    constructor( private treeViewService: TreeViewService ) { }

    ngOnInit() {
        this.treeViewItems = this.treeViewService.getTreeViewItems();
    }
}