import { TestBed, async } from '@angular/core/testing';
import { TreeViewDropSlot } from './tree-view-drop-slot.component';

describe('TreeViewDropSlot: component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TreeViewDropSlot]
        });
    });

    it(`should create TreeViewDropSlot`, async(() => {
        let fixture = TestBed.createComponent(TreeViewDropSlot);
        let treeViewDropSlot = fixture.componentInstance;
        expect(treeViewDropSlot).toBeTruthy();
    }));


});