/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;
let element: HTMLElement;

describe('App: QDTTreeView', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;
    });

    it('should create the app', async(() => {
        //let fixture = TestBed.createComponent(AppComponent);
        //let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render tree-view element`, async(() => {
        //let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        //let compiled = fixture.debugElement.nativeElement;
        expect(element.querySelector('tree-view')).not.toBeNull(); 
    }));

    //it(`should have as title 'app works!'`, async(() => {
    //    let fixture = TestBed.createComponent(AppComponent);
    //    let app = fixture.debugElement.componentInstance;
    //    expect(app.title).toEqual('app works!');
    //}));

    //it('should render title in a h1 tag', async(() => {
    //    let fixture = TestBed.createComponent(AppComponent);
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('app works!');
    //}));
});
