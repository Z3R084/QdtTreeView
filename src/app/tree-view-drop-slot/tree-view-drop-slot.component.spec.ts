import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TreeViewDropSlot } from './tree-view-drop-slot.component';

let fixture: ComponentFixture<TreeViewDropSlot>;
let dropSlot: TreeViewDropSlot;
let element: HTMLElement;

describe('TreeViewDropSlot: component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TreeViewDropSlot]
        });
        fixture = TestBed.createComponent(TreeViewDropSlot);
        dropSlot = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;
    });

    it(`should create TreeViewDropSlot`, async(() => {
        //let fixture = TestBed.createComponent(TreeViewDropSlot);
        //let treeViewDropSlot = fixture.componentInstance;
        expect(dropSlot).toBeTruthy();
    }));


});