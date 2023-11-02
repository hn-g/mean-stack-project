import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private apiUrl = 'http://localhost:3000/api/stack';

  constructor(private http: HttpClient) { }

  getStack(): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl);
  }

  pushToStack(number: number): Observable<number[]> {
    return this.http.post<number[]>(this.apiUrl, { number });
  }

  popFromStack(): Observable<number[]> {
    return this.http.delete<number[]>(this.apiUrl);
  }

  updateStackSize(number: number): Observable<number[]> {
    return this.http.put<number[]>('http://localhost:3000/api/stackSize', { size: number });
  }

  getStackSize(): Observable<number[]> {
    return this.http.get<number[]>('http://localhost:3000/api/stackSize');
  }
}
