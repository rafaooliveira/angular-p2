import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent {

	@Output() recomendacaoAdicionada = new EventEmitter();

	adicionar(recomendacao: any) {
		const reco = {
			recomendacao: recomendacao
		}
		if (recomendacao.length) {
			console.log(this.recomendacaoAdicionada.emit(reco))
		} else {
			alert('Preencha o campo por favor!')
		}
	}
}
