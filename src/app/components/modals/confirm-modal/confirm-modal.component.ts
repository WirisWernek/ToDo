import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemModel } from 'src/app/models/item.model';

@Component({
	selector: 'app-confirm-modal',
	templateUrl: './confirm-modal.component.html',
	styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
	@Input() item!: ItemModel;
	constructor(protected modal: NgbActiveModal) {}
}
