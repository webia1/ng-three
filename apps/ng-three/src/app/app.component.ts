import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { ExperienceComponent } from './shared/components/experience/experience.component';
@Component({
  standalone: true,
  imports: [RouterModule, NgtCanvas],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-three';
  sceneGraph = ExperienceComponent;
}
