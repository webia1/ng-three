import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { ExperienceComponent } from './shared/components/experience/experience.component';

@Component({
  standalone: true,
  imports: [RouterModule, NgtCanvas, NgtsOrbitControls, ExperienceComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-three';
  sceneGraph = ExperienceComponent;
}
