import { Component, OnInit } from '@angular/core';
import { PoliticaDePrivacidade } from 'src/app/entitie';
import { PoliticaDePrivacidadeService } from 'src/app/servicos/politica-de-privacidade.service';

@Component({
  selector: 'app-politicadeprivacidade',
  templateUrl: './politicadeprivacidade.component.html',
  styleUrls: ['./politicadeprivacidade.component.css']
})
export class PoliticadeprivacidadeComponent implements OnInit {

  politica: PoliticaDePrivacidade = {
    description: ""
  }

  constructor(private politicaService: PoliticaDePrivacidadeService) { }

  ngOnInit(): void {
    this.politicaService.buscarPolitica().subscribe(res => {
      this.politica = res
      console.log(res)
    })   
  }
}
