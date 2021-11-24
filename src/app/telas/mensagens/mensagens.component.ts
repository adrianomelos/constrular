import { Component, OnInit } from '@angular/core';
import { FaleConosco } from 'src/app/entitie';
import { ContatoService } from 'src/app/servicos/contato.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  contato: FaleConosco[] = []; 

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.contatoService.findAll().subscribe(contatos => {
      this.contato = contatos
      console.log(this.contato)
    })
  }



}
