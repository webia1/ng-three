import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgtCanvas],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-three';
  sceneGraph = Experience;
}
