import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbModal


@Component({
  selector: 'ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html'
})
export class NgBootstrapComponent {
  showAlert = false;
  alertMessage = '¡Tu primera alerta!';
  clickCount = 0;
  alertType: 'success' | 'warning' | 'danger' = 'success';
  alertTypes: ('success' | 'warning' | 'danger')[] = ['success', 'warning', 'danger'];
  currentIndex = 0;
  selectedOption: string = 'opcion1'; 
  page: number = 1;
  totalItems = 100;
  model = { year: 2023, month: 11, day: 1 }; // Fecha inicial (opcional)

  constructor(private modalService: NgbModal) {}


    // Método para mostrar la alerta (abrirla)
	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	  }
	


  // Método para alternar la visibilidad de la alerta
  toggleAlert() {
    this.showAlert = !this.showAlert;
  }

  // Método para restablecer la alerta con un nuevo mensaje
  resetAlert() {
    this.showAlert = true;
    this.alertMessage = '¡Operación restablecida!';
  }

  // Método para mostrar una alerta temporalmente
  showTemporaryAlert() {
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 3000); // Ocultar después de 3 segundos
  }

  // Método para incrementar un contador de clics y alternar la alerta
  incrementClickCount() {
    this.clickCount++;
    this.showAlert = this.clickCount % 2 !== 0; // Alterna visibilidad con cada clic
  }

  // Método para establecer el tipo de alerta
  setAlertType(type: 'success' | 'warning' | 'danger') {
    this.alertType = type;
    this.showAlert = true;
  }

  // Método para mostrar una alerta con un mensaje personalizado
  showAlertWithMessage(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  // Método para abrir la alerta tras confirmación del usuario
  confirmAndShowAlert() {
    if (confirm('¿Deseas mostrar la alerta?')) {
      this.showAlert = true;
    }
  }

  // Método para alternar entre diferentes tipos de alerta
  toggleAlertType() {
    this.showAlert = true;
    this.alertType = this.alertTypes[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.alertTypes.length;
  }

  // Método para cerrar la alerta después de una acción secundaria
  closeAlertAfterAction() {
    // Acción secundaria (p. ej., registro de actividad)
    this.showAlert = false; // Cierra la alerta después de la acción
  }

  // Método para cerrar la alerta tras confirmación del usuario
  confirmCloseAlert() {
    if (confirm('¿Estás seguro de que deseas cerrar la alerta?')) {
      this.showAlert = false;
    }
  }

  ngOnInit(): void {
    const today = new Date();
    this.model = {
      year: today.getFullYear(),
      month: today.getMonth() + 1, // Meses en JavaScript empiezan en 0
      day: today.getDate()
    };
  }

  onPageChange(newPage: number) {
	this.page = newPage;
	console.log(`Página actual cambiada a: ${newPage}`);
	// Aquí puedes realizar alguna acción adicional, como cargar nuevos datos.
  }

  onDateSelect(date: { year: number; month: number; day: number })  {
    console.log('Fecha seleccionada:', date);
  }
}
