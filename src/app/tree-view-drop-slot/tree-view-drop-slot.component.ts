import { Component, Input, Output, trigger, state, style, transition, animate, EventEmitter } from '@angular/core';
import { TreeViewItem } from '../tree-view-item/tree-view-item.model';

@Component({
    selector: 'tree-view-drop-slot',
    templateUrl: './tree-view-drop-slot.component.html',
    styleUrls: ['./tree-view-drop-slot.component.less']
    //animations: [
    //    trigger('viewState', [
    //        state('true', style({
    //            height: '*',
    //            opacity: 1
    //        })),
    //        state('false', style({
    //            height: '0px',
    //            opacity: 0
    //        })),
    //        transition('1 => 0', animate('300ms')),
    //        transition('0 => 1', animate('300ms'))
    //    ])
    //]
})

export class TreeViewDropSlot {
    @Input() treeViewItem: TreeViewItem;
    @Input() treeItemIndex: number;

    onDrop($event) {
        $event.preventDefault();
        this.treeViewItem.mouseAction('drop', $event, { item: this.treeViewItem, index: this.treeItemIndex });
    }

    onDragOver($event) {
        $event.preventDefault();
        this.treeViewItem.treeModel.setDropLocation({ component: this, item: this.treeViewItem, index: this.treeItemIndex });
    }

    onDragLeave() {
        if (this.treeViewItem.treeModel.isDraggingOver(this)) {
            this.treeViewItem.treeModel.setDropLocation(null);
        }
    }
}