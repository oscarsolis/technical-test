// core
import { Component } from '@angular/core';

//
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'loading',
  template: `
		<div class="loading-wrapper" *ngIf="_show">
      <mat-spinner *ngIf="!_showError"></mat-spinner>
      <div class="error" *ngIf="_showError">
					<i class="fa fa-times fa-5x"></i>
			</div>
			<p class="text-message">{{ _message }}</p>
		</div>
	`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  //
  _message: string = MESSAGES.loadingMessage;

  //
  _show: boolean = true;

  //
  _showError: boolean = false;

  constructor() { }

  /**
   *
   * @param message
   */
  showMessageError(message: string = MESSAGES.unknownError): void {
    this._show = true;
    this._showError = true;
    this._message = message;
  }

  /**
   *
   */
  show(): void {
    this._show = true;
    this._showError = false;
    this._message = MESSAGES.loadingMessage;
  }

  /**
   *
   */
  hide(): void {
    this._show = false;
  }

  /**
   *
   */
  isVisible(): boolean {
    return this._show;
  }
}
