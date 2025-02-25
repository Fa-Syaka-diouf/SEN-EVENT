import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { environment } from '../../../environments';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrl: './visitor-profile.component.css'
})
export class VisitorProfileComponent implements OnInit {
  user: any;
  djangoServer = 'http://localhost:8000'; // URL de votre serveur Django
  
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.user$.subscribe(data => {
      if (data) {
        // Créer une copie pour ne pas modifier l'original
        this.user = {...data};
        
        // Corriger les URLs des images
        if (this.user.profile_photo && this.user.profile_photo.startsWith('/media')) {
          this.user.profile_photo = this.djangoServer + this.user.profile_photo;
        }
        if (this.user.cover_photo && this.user.cover_photo.startsWith('/media')) {
          this.user.cover_photo = this.djangoServer + this.user.cover_photo;
        }
        
        console.log("URLs corrigées:", this.user.profile_photo, this.user.cover_photo);
      } else {
        // Récupérer depuis localStorage comme avant
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          this.user = JSON.parse(storedUser);
          // Appliquer aussi les corrections aux données du localStorage
          if (this.user.profile_photo && this.user.profile_photo.startsWith('/media')) {
            this.user.profile_photo = this.djangoServer + this.user.profile_photo;
          }
          if (this.user.cover_photo && this.user.cover_photo.startsWith('/media')) {
            this.user.cover_photo = this.djangoServer + this.user.cover_photo;
          }
        }
      }
    });
  }
}