import { Injectable } from '@angular/core';
import { TreeViewItem } from '../tree-view-item/tree-view-item.model';
import * as _ from 'lodash';

@Injectable()
export class TreeViewModel {
    roots: TreeViewItem[];
    treeItems: any[];
    expandedItemIds: { [id: string]: boolean } = {};
    expandedItems: TreeViewItem[];
    activeItemIds: { [id: string]: boolean } = {};
    activeItems: TreeViewItem[];
    _focusedItem: TreeViewItem = null;
    focusedItemId: string = null;
    _dragItem: { item: TreeViewItem, index: number } = null;
    _dropLocation: { component: any, item: TreeViewItem, index: number } = null;
    _hoveredItem: TreeViewItem = null;
    hoveredItemId: string = null;
    virtualRoot: TreeViewItem;
    static focusedTree = null;

    setData({treeItems}) {
        if (treeItems) {
            this.treeItems = treeItems;
        }
        this.update();
    }

    mouseLeave() {
        this._hoveredItem = null;
        this.hoveredItemId = null;
    }

    update() {
        let virtualRootConfig = {
            virtual: true,
            children: this.treeItems
        };
        this.virtualRoot = this.getTreeViewItem(virtualRootConfig, null);
        this.roots = this.virtualRoot.children;
    }

    getTreeViewItem(treeItem: any, parent: TreeViewItem) {
        return new TreeViewItem(treeItem, parent, this);
    }

    getFocusedItem(): TreeViewItem {
        return this._focusedItem;
    }

    getDragItem(): { item: TreeViewItem, index: number } {
        return this._dragItem || { item: null, index: null };
    }

    getDropLocation(): { component: any, item: TreeViewItem, index: number } {
        return this._dropLocation || { component: null, item: null, index: null };
    }

    setFocusedItem(item: TreeViewItem) {
        this._focusedItem = item;
        this.focusedItemId = item ? item.id : null;
    }

    setHoverItem(item: TreeViewItem) {
        this._hoveredItem = item;
        this.hoveredItemId = item ? item.id : null;
    }

    setExpandedItem(item: TreeViewItem, value: boolean) {
        const index = _.indexOf(this.expandedItems, item);
        if (value && !index) {
            this.expandedItems.push(item);
        } else if (index) {
            _.pullAt(this.expandedItems, index);
        }
        this.expandedItemIds[item.id] = value;
    }

    setDragItem(dragItem: { item: TreeViewItem, index: number }) {
        this._dragItem = dragItem;
    }

    setDropLocation(dropLocation: { component: any, item: TreeViewItem, index: number }) {
        this._dropLocation = dropLocation;
    }

    isExpanded(node: TreeViewItem): boolean {
        return this.expandedItemIds[node.id];
    }

    isActive(node: TreeViewItem) {
        return this.activeItemIds[node.id];
    }

    isItemFocused(item: TreeViewItem): boolean {
        return this._focusedItem === item;
    }

    isItemHovered(item: TreeViewItem): boolean {
        return this._hoveredItem === item;
    }

    isDraggingOver(component) {
        console.log(this.getDropLocation().component === component);
        return this.getDropLocation().component === component;
    }

    setActiveItem(item: TreeViewItem, value, multi = false) {
        if (value) {
            item.focus();
        }
        this._setActiveItemSingle(item, value);
    }

    canMoveItem({ from, to }) {
        if (from.item === to.item && from.index === to.index) {
            return false;
        }

        const fromChildren = from.item.children;
        const fromItem = fromChildren[from.index];

        return !to.item.isDescendantOf(fromItem);
    }

    moveItem({ from, to }) {
        if (!this.canMoveItem({ from, to })) {
            return;
        }

        const fromChildren = from.item.getField('children');

        if (!to.item.getField('children')) {
            to.item.setField('children', []);
        }
        const toChildren = to.item.getField('children');

        const item = fromChildren.splice(from.index, 1)[0];
        let toIndex = (from.item === to.item && to.index > from.index) ? to.index - 1 : to.index;

        toChildren.splice(toIndex, 0, item);
        this.update();

    }

    _setActiveItemSingle(item: TreeViewItem, value) {
        this.activeItemIds = {};
        this.activeItems = [];
        if (value) {
            this.activeItems.push(item);
            this.activeItemIds[item.id] = true;
        }
    }

    setFocus(value: boolean) {
        TreeViewModel.focusedTree = value ? this : null;
    }
}