import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { TreeViewComponent } from './tree-view.component';
import { TreeViewItemComponent } from '../tree-view-item/tree-view-item.component';
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

let fixture: ComponentFixture<TreeViewComponent>;
let element: HTMLElement;
let treeView: TreeViewComponent;

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
            declarations: [TreeViewComponent, TestHostComponent, TreeViewItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [TreeViewModel]
        });

        fixture = TestBed.createComponent(TreeViewComponent);
        treeView = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;
    });

    it(`should create the component`, async(() => {
        //let fixture = TestBed.createComponent(TreeViewComponent);
        //let treeView = fixture.debugElement.componentInstance;
        expect(treeView).toBeTruthy();
    }));

    it(`should test css states`, async(inject([TreeViewModel], (treeModel: TreeViewModel) => {
        //let fixture = TestBed.createComponent(TreeViewComponent);
        //let treeView = fixture.componentInstance;
        treeView.treeModel.setData({ treeItems: items });
        fixture.detectChanges();
        let compiledLi: HTMLElement = element.querySelector('li');
        let compiledDiv: HTMLElement = compiledLi.querySelector('div');
        expect(compiledLi.className).not.toContain('selected');
        expect(compiledLi.className).not.toContain('entry-hover');
        let event = new Event('mouseover');
        compiledLi.dispatchEvent(event);
        fixture.detectChanges();
        expect(compiledLi.className).toContain('entry-hover');
        event = new Event('mouseleave');
        compiledLi.dispatchEvent(event);
        fixture.detectChanges();
        expect(compiledLi.className).not.toContain('entry-hover');
        compiledDiv.click();
        fixture.detectChanges();
        expect(compiledLi.className).toContain('selected');
    })));

    //it(`should load data`, async(inject([TreeViewModel], (treeModel: TreeViewModel) => {
    //    treeModel.setData({ treeItems: items })
    //    expect(treeModel.roots.length).toBe(1);
    //})));

    it(`should call ngChanges`, async(() => {
        let fixtureHost = TestBed.createComponent(TestHostComponent);
        let testHost = fixtureHost.componentInstance;
        testHost.treeItems = items;
        spyOn(testHost.treeViewComponent, 'ngOnChanges').and.callThrough();
        fixtureHost.detectChanges();
        expect(testHost.treeViewComponent.ngOnChanges).toHaveBeenCalled();
    }));
});