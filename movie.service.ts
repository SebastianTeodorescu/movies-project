import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataModel } from "./app/movie/movie.model";

@Injectable({providedIn: 'root'})
export class MovieService {
    private http = inject(HttpClient);
    
    getMovies(): Observable<DataModel> {
        return this.http.get<DataModel>('https://api.themoviedb.org/3/trending/all/week?api_key=cab89bb8f16da198f390d4081dd019b1');
    }
}