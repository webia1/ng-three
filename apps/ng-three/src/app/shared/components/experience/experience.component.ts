import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { extend, injectBeforeRender } from 'angular-three';
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  PointLight,
} from 'three';

extend({
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  AmbientLight,
  PointLight,
});

@Component({
  standalone: true,
  templateUrl: './experience.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  cubeRef = viewChild.required<ElementRef<Mesh>>('cube');

  constructor() {
    injectBeforeRender(({ delta }) => {
      const cube = this.cubeRef().nativeElement;
      cube.rotation.x += delta;
      cube.rotation.y += delta;
    });
  }
}
