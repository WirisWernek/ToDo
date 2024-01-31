import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/components/modals/confirm-modal/confirm-modal.component';
import { ItemModalComponent } from 'src/app/components/modals/item-modal/item-modal.component';
import { ItemModel } from 'src/app/models/item.model';
import { ItensService } from 'src/app/services/itens.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
	listItems: ItemModel[] = [];
	constructor(private itensService: ItensService, private modalService: NgbModal) {}

	addNovo() {
		let modalRef = this.modalService.open(ItemModalComponent, { size: 'md', centered: true });
		modalRef.componentInstance.isNew = true;
		modalRef.closed.subscribe(() => {
			this.getAll();
		});
	}

	editarItem(item: ItemModel) {
		let modalRef = this.modalService.open(ItemModalComponent, { size: 'md', centered: true });
		modalRef.componentInstance.isNew = false;
		modalRef.componentInstance.texto = item.texto;
		modalRef.componentInstance.id = item.id;
		modalRef.closed.subscribe(() => {
			this.getAll();
		});
	}

	excluirItem(item: ItemModel) {
		let modalRef = this.modalService.open(ConfirmModalComponent, { size: 'md', centered: true });
		modalRef.componentInstance.item = item;
		modalRef.result.then((valor) => {
			if (valor === 'Ok click') {
				this.itensService.deleteById(item.id).then(() => {
					this.getAll();
				});
			}
		});
	}

	ngOnInit(): void {
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
