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
    virtualRoot: TreeViewItem;
    static focusedTree = null;

    setData({treeItems}) {
        if (treeItems) {
            this.treeItems = treeItems;
        }
        this.update();
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

    setFocusedItem(item: TreeViewItem) {
        this._focusedItem = item;
        this.focusedItemId = item ? item.id : null;
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

    isExpanded(node: TreeViewItem): boolean {
        return this.expandedItemIds[node.id];
    }

    isActive(node: TreeViewItem) {
        return this.activeItemIds[node.id];
    }

    isItemFocused(item: TreeViewItem): boolean {
        return this._focusedItem === item;
    }

    setActiveItem(item: TreeViewItem, value, multi = false) {
        if (value) {
            item.focus();
        }
        this._setActiveItemSingle(item, value);
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