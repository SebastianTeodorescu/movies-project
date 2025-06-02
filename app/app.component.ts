import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { Movie } from './movie/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'movie-project-bogdan';
  private movieService = inject(MovieService);
  movies!: Movie[];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((movies) => {
      return (this.movies = movies.results.filter(
        (movie: Movie) => movie.media_type === 'movie'
      ));
    });

    console.log(this.movies);
  }
}
