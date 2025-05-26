import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  message: string = ''; // variável para a mensagem

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.message = 'Preencha todos os campos!';      
      return;
    }
    alert(`Email: ${this.email}\nSenha: ${this.password}`);
  }
}
