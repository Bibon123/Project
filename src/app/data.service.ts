import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage } from './review/IMessage.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getComments(): Observable<IMessage[]> {
    return this.http.get(`${environment.fbDbUrl}messages.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
        }));
      })
      );
  }

  addComment(message: IMessage): void {
    this.http.post(`${environment.fbDbUrl}messages.json`, message).subscribe();
  }

  constructor(private http: HttpClient) { }
}
