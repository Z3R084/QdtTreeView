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

    get isHovered() {
        return this.treeModel.isItemHovered(this);
    }

    set id(value) {
        this.setField('id', value);
    }

    get displayField() {
        return this.getField('name');
    }

    get hasChildren() {
        return !!(this.data.hasChildren || (this.children && this.children.length > 0));
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
            this.toggleExpanded();
        } else if (actionName === 'over') {
            $event.stopPropagation();
            this.hoverItem();
        } else if (actionName === 'out') {

        }
    }

    hoverItem() {
        this.treeModel.setHoverItem(this);
        return this;
    }

    toggleExpanded() {
        this.setIsExpanded(!this.isExpanded);
        return this;
    }

    setIsExpanded(value: boolean) {
        this.treeModel.setExpandedItem(this, value);
        //if (!this.children && this.hasChildren && value) {
        //    this.loadChildren();
        //}
        return this;
    }

    //loadChildren() {
    //    Promise.resolve(this.options.getChildren(this)).then((children) => {
    //        if (children) {
    //            this.setField('children', children);
    //            this._initChildren();
    //        }
    //    });
    //}

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