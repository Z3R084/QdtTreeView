import { Injectable } from '@angular/core';

@Injectable()
export class TreeViewService {
    getTreeViewItems(): Object[] {
        return [
            { id: 1, name: 'Quast', subitems: [{ id: 3, name: 'Karl', subitems: [] }] },
            { id: 2, name: 'Hanebuth', subitems: [] }
        ];
    }
}