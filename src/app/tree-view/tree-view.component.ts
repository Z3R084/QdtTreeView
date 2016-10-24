import { Component, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { TreeViewModel } from './tree-view.model';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [TreeViewModel]
})

export class TreeViewComponent implements OnChanges {
    constructor(public treeModel: TreeViewModel, private dragulaService: DragulaService) {
        dragulaService.setOptions('tree-drag', {
            accepts: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
                return !el.contains(target);
            },
            moves: (el: Element, container: Element, handle: Element): boolean => {
                return el.classList.contains('entry');
            }
        });
        dragulaService.dropModel.subscribe((value) => {
            this.onDropModel(value.slice( 1 ));
        });
    }

    @Input() set treeItems(treeItems: any[]) { }

    ngOnChanges(changes) {
        this.treeModel.setData({ treeItems: changes.treeItems && changes.treeItems.currentValue });
    }

    onDropModel(args: any): void {
        let [el, target, source] = args;
        console.log(this.treeModel.roots);
    }
}