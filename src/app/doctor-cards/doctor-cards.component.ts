import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorCardsComponent {
  doctors = [
    {
      name: 'Dr. Juan Pérez',
      specialty: 'cardiology',
      location: 'lima',
      description: 'Cardiólogo...',
      image: 'assets/image/doctor1.jpg'
    },
    {
      name: 'Dra. Laura Gómez',
      specialty: 'neurology',
      location: 'cusco',
      description: 'Neurologa...',
      image: 'assets/image/doctor.jpg'
    },
    {
      name: 'Dr. Alberto Díaz',
      specialty: 'pediatrics',
      location: 'arequipa',
      description: 'Pediatra...',
      image: 'assets/image/doctor3.jpg'
    },
    {
      name: 'Dra. Mariana Fernández',
      specialty: 'dermatology',
      location: 'lima',
      description: 'Dermatóloga...',
      image: 'assets/image/doctor2.jpg'
    },
    {
      name: 'Dra. Carla Andrea Costa',
      specialty: 'dermatology',
      location: 'Cusco',
      description: 'Dermatóloga...',
      image: 'assets/image/doctor2.jpg'
    },
    {
      name: 'Dra. Luisa Fernandez Rojas',
      specialty: 'pediatrics',
      location: 'lima',
      description: 'Pediatra...',
      image: 'assets/image/doctor2.jpg'
    },
  ];

  selectedSpecialty: string = 'all';
  selectedLocation: string = 'all';

  filteredDoctors: any[] = [...this.doctors];  // Crear una copia inicial de los doctores

  // Aplica los filtros
  applyFilters() {
    // Filtra los doctores según los filtros seleccionados
    this.filteredDoctors = this.doctors.filter(doctor => {
      const matchesSpecialty = this.selectedSpecialty === 'all' || doctor.specialty === this.selectedSpecialty;
      const matchesLocation = this.selectedLocation === 'all' || doctor.location === this.selectedLocation;
      return matchesSpecialty && matchesLocation;
    });
  }

  // Método para actualizar los filtros cada vez que se cambian
  onSpecialtyChange() {
    this.applyFilters();
  }

  onLocationChange() {
    this.applyFilters();
  }
}
