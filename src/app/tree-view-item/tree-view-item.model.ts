import { Injectable } from '@angular/core';
import { TreeViewModel } from '../tree-view/tree-view.model';

@Injectable()
export class TreeViewItem {
    level: number;
    path: string[];
    children: TreeViewItem[];

    constructor(public data: any, public parent: TreeViewItem, public treeModel: TreeViewModel) {
        this.id = this.id || uuid();
        this.level = this.parent ? this.parent.level + 1 : 0;
        this.path = this.parent ? [...this.parent.path, this.id] : [];
        if (this.getField('children')) {
            this._initChildren();
        }
    }

    get isExpanded(): boolean {
        return this.treeModel.isExpanded(this);
    }

    get id() {
        return this.getField('id');
    }

    get isActive() {
        return this.treeModel.isActive(this);
    }

    get isFocused() {
        return this.treeModel.isItemFocused(this);
    }

    set id(value) {
        this.setField('id', value);
    }

    get displayField() {
        return this.getField('name');
    }

    getField(key) {
        return this.data[key];
    }

    setField(key, value) {
        this.data[key] = value;
    }

    mouseAction(actionName: string, $event, data: any = null) {
        this.treeModel.setFocus(true);
        if (actionName === 'click') {
            this.toggleActivated();
        }
    }

    focus() {
        let prevItem = this.treeModel.getFocusedItem();
        this.treeModel.setFocusedItem(this);
        //this.scrollIntoView();
        if (prevItem) {
            // onBlur Event
        }

        return this;
    }

    setIsActive(value, multi = false) {
        this.treeModel.setActiveItem(this, value, multi);
    }

    toggleActivated(multi = false) {
        this.setIsActive(!this.isActive, multi);
        return this;
    }

    _initChildren() {
        this.children = this.getField('children').map(c => new TreeViewItem(c, this, this.treeModel));
    }
}

function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}