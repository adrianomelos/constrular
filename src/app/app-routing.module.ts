import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarClienteComponent } from './telas/adicionar-cliente/adicionar-cliente.component';
import { ClientesComponent } from './telas/clientes/clientes.component';
import { ContatoComponent } from './telas/contato/contato.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { MensagensComponent } from './telas/mensagens/mensagens.component';
import { PoliticadeprivacidadeComponent } from './telas/politicadeprivacidade/politicadeprivacidade.component';
import { ListarprodutosComponent } from './telas/produtos/listarprodutos/listarprodutos.component';
import { RecuperarsenhaComponent } from './telas/recuperarsenha/recuperarsenha.component';
import { RelatoriosComponent } from './telas/relatorios/relatorios.component';
import { TermosdeusoComponent } from './telas/termosdeuso/termosdeuso.component';
import { VendasComponent } from './telas/vendas/vendas.component';

const routes: Routes = [
  { path: "termosdeuso", component: TermosdeusoComponent},
  { path: "politica", component: PoliticadeprivacidadeComponent},
  { path: "", component: LoginComponent},
  { path: "contato", component: ContatoComponent},
  { path: "recuperarsenha", component: RecuperarsenhaComponent},
  { path: "home", component: HomeComponent,
      children: [
        { path: "listarProdutos", component: ListarprodutosComponent},
        { path: "mensagens", component: MensagensComponent},
        { path: "clientes", component: ClientesComponent},
        { path: "relatorios", component: RelatoriosComponent},
        { path: "vendas", component: VendasComponent},
        { path: "adicionarCliente", component: AdicionarClienteComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
