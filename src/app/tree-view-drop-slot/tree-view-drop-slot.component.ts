import { Component, Input, Output, trigger, state, style, transition, animate, EventEmitter } from '@angular/core';

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

export class TreeViewSectionComponent {
    @Input() treeViewItems: Object[];
    hoverElement: Object;
    @Input() selectedItem: Object;
    @Output() onSelected = new EventEmitter<Object>();

    overElement($event: MouseEvent, item: Object): void {
        $event.stopPropagation();
        //$event.preventDefault();
        this.hoverElement = item;
    }

    selectItem($event: MouseEvent, item: Object): void {
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedItem = item;
        this.onSelected.emit(this.selectedItem);
    }

    selectedItemChanged(item: Object) {
        if (this.selectedItem !== item) {
            this.selectedItem = null;
        }
    }
}