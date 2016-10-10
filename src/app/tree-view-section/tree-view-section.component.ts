import { Component, Input } from '@angular/core';

@Component({
    selector: 'tree-view-section',
    templateUrl: './tree-view-section.component.html'
})

export class TreeViewSectionComponent {
    @Input() treeViewItems: Object[];

}