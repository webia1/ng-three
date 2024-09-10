import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
@Component({
  standalone: true,
  imports: [RouterModule, NgtCanvas],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-three';
  sceneGraph = Experience;
}
