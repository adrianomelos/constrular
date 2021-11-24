import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adicionarCliente(): void{
      console.log("clicou no botão");
      this.router.navigate(['home/adicionarCliente']);
  }

}
