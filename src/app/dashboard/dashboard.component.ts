import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TransacaoComponent } from "../transacao/transacao.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, TransacaoComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  mostrarFormulario = false;

  constructor(private router: Router) {} // Injeção do Router

  addTransacao() {
    // Redirecionar para a tela de transação
     this.router.navigate(['/transacao']);
  }
}
