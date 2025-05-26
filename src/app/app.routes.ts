import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransacaoComponent } from './transacao/transacao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // rota padrão
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }, // rota de cadastro 
  { path: 'dashboard', component: DashboardComponent }, // rota do dashboard 
  { path: 'transacao', component: TransacaoComponent } // rota de transação

  // Outras rotas aqui...
];
