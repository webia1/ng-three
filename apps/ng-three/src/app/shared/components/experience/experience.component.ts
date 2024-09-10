import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { extend, injectBeforeRender } from 'angular-three';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshMatcapMaterial,
} from 'three';

extend({ Mesh, BoxGeometry, MeshBasicMaterial, MeshMatcapMaterial });

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor() {
    injectBeforeRender(({ delta }) => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += delta;
      mesh.rotation.y += delta;
    });
  }
}
