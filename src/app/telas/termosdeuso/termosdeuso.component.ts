import { Component, OnInit } from '@angular/core';
import { TermosDeUso } from 'src/app/entitie';
import { TermosDeUsoService } from 'src/app/servicos/termos-de-uso.service';

@Component({
  selector: 'app-termosdeuso',
  templateUrl: './termosdeuso.component.html',
  styleUrls: ['./termosdeuso.component.css']
})
export class TermosdeusoComponent implements OnInit {

  termos: TermosDeUso = {
    description: ""
  }

  constructor(private termosService: TermosDeUsoService) { }

  ngOnInit(): void {
    this.termosService.buscarTermosDeUso().subscribe(res => {
      this.termos = res
      console.log(res)
    })
  }

}
