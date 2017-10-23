import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

const heroesUrl = 'api/heroes';
const headerObj = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get<Hero[]>(heroesUrl)
      .toPromise()
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .toPromise()
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    return this.http.put(heroesUrl, hero, headerObj)
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: String): Promise<Hero> {
    return this.http.post(heroesUrl, { name }, headerObj)
      .toPromise()
      .catch(this.handleError);
  }

  delete(id: number): Promise<Hero> {
    const url = `${heroesUrl}/${id}`;
    return this.http.delete(url, headerObj)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
