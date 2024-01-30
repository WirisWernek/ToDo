import { Injectable, Injector } from '@angular/core';
import { ItemModel } from '../models/item.model';
import { IndexedDBAbstract } from '../shared/service/indexed-db.service';

@Injectable({
	providedIn: 'root',
})
export class ItensService extends IndexedDBAbstract<ItemModel> {
	constructor(protected injectable: Injector) {
		super(injectable, 'itens');
	}
}
