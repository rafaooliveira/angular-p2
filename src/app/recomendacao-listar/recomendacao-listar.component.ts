import { Component, Input } from '@angular/core';

@Component({
  selector: 'recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent {
	@Input() recomenda: any;

	constructor () {
		this.recomenda = Object
	}

}
