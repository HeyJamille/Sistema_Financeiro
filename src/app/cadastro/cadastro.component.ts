import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  name = '';
  email = '';
  password = '';
  showPassword = false;
  message: string = '';

  constructor(private router: Router) {} // Injeção do Router

  onCadastro() {
    if (
      this.name.trim() === '' ||
      this.email.trim() === '' ||
      this.password.trim() === ''
    ) {
      this.message = 'Preencha todos os campos!';
      return;
    }

    // Redirecionar para o login
    this.router.navigate(['/dashboard']);
  }
}
