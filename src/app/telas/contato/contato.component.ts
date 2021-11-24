import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaleConosco } from 'src/app/entitie';
import { ContatoService } from 'src/app/servicos/contato.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private router: Router, private contatoService: ContatoService ) { }

  contato: FaleConosco = {
    nome: '',
    mensagem: '',
    email: ''
  }

  ngOnInit(): void {
  }

  save():void {
    this.contatoService.save(this.contato).subscribe(categorias => {
      console.log(this.contato)
      alert("Mensagem enviada com sucesso, respoderemos em breve!")
      this.router.navigate(['']);
    }, err => {
      console.log(this.contato)
      alert("Não foi possível enviar a mensagem tente novamente mais tarde!")
    })
  }

}
