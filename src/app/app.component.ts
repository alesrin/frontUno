import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  model = { year: 2023, month: 11, day: 1 }; // Fecha inicial en el formato requerido

  onDateSelect(date: { year: number; month: number; day: number }) {
    console.log('Fecha seleccionada:', date);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
