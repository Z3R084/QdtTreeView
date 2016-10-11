import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'tree-view-section',
    templateUrl: './tree-view-section.component.html'
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
}