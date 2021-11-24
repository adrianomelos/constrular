import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TermosDeUso } from '../entitie';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class TermosDeUsoService {

  buscarTermosDeUso() {
    return this.http.get<TermosDeUso>(BaseUrls.baseTermos)
  }

  constructor(private http: HttpClient) { }
}

