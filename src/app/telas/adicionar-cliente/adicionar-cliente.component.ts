import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adicionarCliente(): void{
    this.router.navigate(['home/clientes']);
  }

}
