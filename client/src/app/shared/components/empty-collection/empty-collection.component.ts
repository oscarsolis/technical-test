// core
import {
  Component,
  Input
} from '@angular/core';

import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'empty-collection',
  template: `
		<div class="alert alert-blue alert-with-icon m-0" *ngIf="showComponent">
			<p class="text-center m-0">
				<strong>{{ emptyCollection }}</strong>
			</p>
	</div>
	`
})
export class EmptyCollectionComponent {

  // Bandera para ver si muestro o no el componente de colección o registros vacíos
  @Input() showComponent: boolean = false;

  // mensaje a mostrar en el componente
  emptyCollection: string = MESSAGES.emptyCollection;

  constructor() { }
}
