import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TreeViewItemComponent } from './tree-view-item.component';
import { TreeViewItem } from './tree-view-item.model';
import { TreeViewModel } from '../tree-view/tree-view.model';

@Component({
	template: '<tree-view-item [treeViewItem]="item" [treeItemIndex]="i"></tree-view-item>',
	providers: [TreeViewModel]
})

class TestHostComponent {
	public treeModel: any = new TreeViewModel();
	//treeModel.setData({
	//	treeItems: [{ id: 99, name: 'test123' }]
	//});
 // item = treeModel.roots
}

let fixture: ComponentFixture<TestHostComponent>;
let treeViewItem: TreeViewItemComponent;
let testHost: TestHostComponent;
let element: DebugElement;

describe('TreeViewItem: component', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TreeViewItemComponent, TestHostComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [TreeViewItem]
		}).compileComponents();

		//fixture = TestBed.createComponent(TreeViewItemComponent);
		fixture = TestBed.createComponent(TestHostComponent);
		testHost = fixture.componentInstance;
		//treeViewItem = fixture.componentInstance;
		element = fixture.debugElement.query(By.css('.header'));;
		//treeViewItem.treeViewItem = item;
		fixture.detectChanges();
	});

	it(`should create TreeViewComponent`, async(() => {
		//let fixture = TestBed.createComponent(TreeViewItemComponent);
		//let treeViewItem = fixture.componentInstance;
		expect(treeViewItem).toBeTruthy();
	}));


});