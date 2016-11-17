import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TreeViewItemComponent } from './tree-view-item.component';
import { TreeViewItem } from './tree-view-item.model';

let fixture: ComponentFixture<TreeViewItemComponent>;
let treeViewItem: TreeViewItemComponent;
let element: HTMLElement;
let item: TreeViewItem;

describe('TreeViewItem: component', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TreeViewItemComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [TreeViewItem]
				});
		const treeItem = { id: 99, name: 'root' }
		item = new TreeViewItem(treeItem, null, null);

		fixture = TestBed.createComponent(TreeViewItemComponent);
		treeViewItem = fixture.componentInstance;
		element = fixture.debugElement.nativeElement;
		treeViewItem.treeViewItem = item;
		fixture.detectChanges();
	});

	it(`should create TreeViewComponent`, async(() => {
		//let fixture = TestBed.createComponent(TreeViewItemComponent);
		//let treeViewItem = fixture.componentInstance;
		expect(treeViewItem).toBeTruthy();
	}));


});