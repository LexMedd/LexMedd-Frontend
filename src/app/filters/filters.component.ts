import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  selectedSpecialty = 'all';
  selectedLocation = 'all';

  doctors = [
    { name: 'Dr. Juan Pérez', specialty: 'cardiology', location: 'lima', description: 'Cardiólogo con amplia experiencia...', image: 'https://via.placeholder.com/400x200' },
    { name: 'Dra. Laura Gómez', specialty: 'neurology', location: 'cusco', description: 'Especialista en Neurología...', image: 'https://via.placeholder.com/400x200' },
    { name: 'Dr. Alberto Díaz', specialty: 'pediatrics', location: 'arequipa', description: 'Pediatra especializado...', image: 'https://via.placeholder.com/400x200' },
    { name: 'Dra. Mariana Fernández', specialty: 'dermatology', location: 'lima', description: 'Dermatóloga con más de 10 años...', image: 'https://via.placeholder.com/400x200' },
    // Más doctores aquí
  ];

  filteredDoctorsList = [...this.doctors];  // Inicialmente muestra todos los doctores

  applyFilters() {
    this.filteredDoctorsList = this.doctors.filter(doctor => {
      const matchesSpecialty = this.selectedSpecialty === 'all' || doctor.specialty === this.selectedSpecialty;
      const matchesLocation = this.selectedLocation === 'all' || doctor.location === this.selectedLocation;
      return matchesSpecialty && matchesLocation;
    });
  }

  onSpecialtyChange() {
    this.applyFilters();
  }

  onLocationChange() {
    this.applyFilters();
  }
}
