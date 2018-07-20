import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'prep-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private location: Location) { }

	/**
	 * Método que me regresa a la página anterior antes de encontrarme con un 404
	 */
  backPage(): void {
    this.location.back();
  }
}
