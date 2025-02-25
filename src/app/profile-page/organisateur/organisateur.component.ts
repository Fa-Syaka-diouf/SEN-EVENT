import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisateur',
  standalone: true,
  templateUrl: './organisateur.component.html',
  styleUrl: './organisateur.component.css',
  imports: [CommonModule],
})
export class OrganisateurComponent implements OnInit {
  currentSlide = 0;

  ngOnInit() {
    // Le code s'exécutera après le chargement du composant
    this.showSlide(this.currentSlide);
  }

  // Méthode pour afficher un slide spécifique
  showSlide(n: number) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    // Masquer tous les slides
    slides.forEach((slide) =>
      (slide as HTMLElement).classList.remove('active')
    );
    // Désactiver tous les points
    dots.forEach((dot) => (dot as HTMLElement).classList.remove('active'));

    // Gérer la boucle du carousel
    this.currentSlide = (n + slides.length) % slides.length;

    // Afficher le slide actif
    (slides[this.currentSlide] as HTMLElement).classList.add('active');
    // Activer le point correspondant
    (dots[this.currentSlide] as HTMLElement).classList.add('active');
  }

  // Méthodes pour les boutons précédent/suivant
  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }
}
