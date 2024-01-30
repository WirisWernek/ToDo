import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { ItensService } from 'src/app/services/itens.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
	listItems: ItemModel[] = [];
	constructor(private itensService: ItensService) {}

	ngOnInit(): void {
		// this.save();
		this.getAll();
	}

	atualizarStatus(item: ItemModel) {
		this.itensService.update(item).then(() => {
			this.getAll();
		});
	}

	save() {
		let item: ItemModel = new ItemModel('Um item qualquer 78', true);
		this.itensService.salvar(item);
	}

	getAll() {
		this.itensService.getAll().then((itens) => {
			itens.sort(function (a, b) {
				if (a.feito) return 1;
				if (b.feito) return -1;
				return 0;
			});

			this.listItems = itens;
		});
	}
}
