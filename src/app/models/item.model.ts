import { BaseModel } from '../shared/models/Base.model';

export class ItemModel extends BaseModel {
	texto: string;
	feito: boolean;

	constructor(texto: string, feito:boolean){
		super();
		this.feito = feito;
		this.texto = texto;
	}
}
