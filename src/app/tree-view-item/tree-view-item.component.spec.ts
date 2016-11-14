import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TreeViewItemComponent } from './tree-view-item.component';

describe('TreeViewItem: component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TreeViewItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
    });

    it(`should create TreeViewComponent`, async(() => {
        let fixture = TestBed.createComponent(TreeViewItemComponent);
        let treeViewItem = fixture.componentInstance;
        expect(treeViewItem).toBeTruthy();
    }));
});