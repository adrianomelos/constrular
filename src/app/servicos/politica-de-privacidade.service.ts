import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrls } from './base-urls';
import { PoliticaDePrivacidade } from '../entitie';

@Injectable({
  providedIn: 'root'
})
export class PoliticaDePrivacidadeService {

  constructor(private http: HttpClient) { }

  buscarPolitica(){
    return this.http.get<PoliticaDePrivacidade>(BaseUrls.basePolitica)
 }

}
