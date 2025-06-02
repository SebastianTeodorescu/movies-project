import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-movie',
  imports: [CardComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  public movie = input.required<Movie>()
  viewDetails = false

  ngOnInit(): void {
    console.log(this.movie);
  }

  openModal() {
    this.viewDetails = true
  }

  onCloseModal() {
    this.viewDetails = false;
  }
}
