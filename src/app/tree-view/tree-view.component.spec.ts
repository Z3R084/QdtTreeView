import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';
import { TreeViewModel } from './tree-view.model';

@Component({
    selector: 'test-host-component',
    template: `<div><tree-view [treeItems]='treeItems'></tree-view></div>`
})
export class TestHostComponent {
    @ViewChild(TreeViewComponent)
    public treeViewComponent: any;
    public treeItems = [];
}

describe('TreeView: component', () => {
    const items = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' }
            ]
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TreeViewComponent, TestHostComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [TreeViewModel]
        });
    });

    it(`should create the component`, async(() => {
        let fixture = TestBed.createComponent(TreeViewComponent);
        let treeView = fixture.debugElement.componentInstance;
        expect(treeView).toBeTruthy();
    }));

    it(`should load data`, async((treeModel: TreeViewModel) => {
        let fixture = TestBed.createComponent(TreeViewComponent);
        let treeView = fixture.componentInstance;
        treeModel.setData({ treeItems: items })
        expect(treeModel.roots.length).toBe(1);
    }));

    it(`should call ngChanges`, async(() => {
        let fixture = TestBed.createComponent(TestHostComponent);
        let testHost = fixture.componentInstance;
        testHost.treeItems = items;
        spyOn(testHost.treeViewComponent, 'ngOnChanges').and.callThrough();
        fixture.detectChanges();
        expect(testHost.treeViewComponent.ngOnChanges).toHaveBeenCalled();
    }));
});