import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  closeModal = output();
  // @Output() closeModal = new EventEmitter();

  onCloseModal() {
    this.closeModal.emit();
  }

}
