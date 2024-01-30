import { Injector } from '@angular/core';
import Dexie from 'dexie';

import { environment } from 'src/environments/environment';
import { BaseModel } from '../models/Base.model';

export abstract class IndexedDBAbstract<T extends BaseModel> {
	private database: Dexie;
	private table: Dexie.Table<T, number>;

	constructor(protected injector: Injector, protected nomeTabela: string) {
		this.database = this.criarDatabase();
		this.table = this.database.table(this.nomeTabela);
	}

	private criarDatabase() {
		const database = new Dexie('database');
		database.version(3).stores(environment.INDEXEDDB_TABLES);
		database.version(3).stores({
			[this.nomeTabela]: '++id',
		});

		return database;
	}

	getAll() {
		let allItens: T[] = [];
		this.table.toArray().then((values) => {
			if (values !== undefined && values !== null) {
				allItens = values;
				return allItens;
			} else {
				return allItens;
			}
		});
	}

	getById(id: number) {
		return this.table.get(id).then(async (item) => {
			if (item !== undefined && item !== null) {
				const model: T = item;
				return model;
			} else {
				return null;
			}
		});
	}

	salvar(modelo: T) {
		this.table
			.add(modelo)
			.then(async (id) => {
				console.log(`Salvo item de Id ${id} na tabela ${this.nomeTabela}.`);
			})
			.catch((err) =>
				console.log(`Erro ao incluir ${modelo} na tabela ${this.nomeTabela} no IndexedDb.`, err)
			);
	}

	update(modelo: T) {
		this.table
			.update(modelo.id, modelo)
			.then(async (id) => {
				console.log(`Atualizado item de Id ${id} na tabela ${this.nomeTabela}.`);
			})
			.catch((err) =>
				console.log(`Erro ao incluir ${modelo} na tabela ${this.nomeTabela} no IndexedDb.`, err)
			);
	}

	deleteById(id: number) {
		this.table.delete(id).then(async () => {
			console.log(`Item com ID ${id} deletado na tabela ${this.nomeTabela} do IndexedDb.`);
		});
	}
}
