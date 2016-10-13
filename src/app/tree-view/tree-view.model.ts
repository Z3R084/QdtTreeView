import { Injectable } from '@angular/core';
import { TreeViewItem } from '../tree-view-item/tree-view-item.model';

@Injectable()
export class TreeViewModel {
    roots: TreeViewItem[];

}