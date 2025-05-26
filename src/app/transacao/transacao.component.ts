// transacao.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
})
export class TransacaoComponent {
  @Output() fechar = new EventEmitter<void>();

  tipoTransacao: 'receita' | 'despesa' = 'receita'; // Receita é o valor padrão

  fecharFormulario() {
    this.fechar.emit();
  }
}
