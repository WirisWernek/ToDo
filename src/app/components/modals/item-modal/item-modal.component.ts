import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from 'src/app/models/item.model';
import { ItensService } from 'src/app/services/itens.service';

@Component({
	selector: 'app-item-modal',
	templateUrl: './item-modal.component.html',
	styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent {
	@Input() id!: number;
	@Input() texto: string = '';
	@Input() isNew!: boolean;

	constructor(protected modal: NgbActiveModal, private itensService: ItensService) {}

	async save() {
		if (this.isNew) {
			this.itensService.salvar(new ItemModel(this.texto, false));
			this.modal.close();
		} else {
			await this.itensService.getById(this.id).then((itemBanco) => {
				if (itemBanco !== undefined && itemBanco !== null) {
					let model: ItemModel = itemBanco;
					model.texto = this.texto;
					this.itensService.update(model).then(() => {
						this.modal.close();
					});
				} else {
					console.log('Item não encontrado');
					this.modal.close();
				}
			});
		}
	}
}
