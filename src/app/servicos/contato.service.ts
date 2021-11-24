import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaleConosco } from '../entitie';
import { BaseUrls } from './base-urls';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  save(faleConosco: FaleConosco): Observable<FaleConosco> { 
    console.log("entrei na classe de serviço")
    return this.http.post<FaleConosco>(BaseUrls.baseFaleConosco, faleConosco)
  }

  findAll(): Observable<FaleConosco[]> {
    return this.http.get<FaleConosco[]>(BaseUrls.baseFaleConosco)
  }

}
