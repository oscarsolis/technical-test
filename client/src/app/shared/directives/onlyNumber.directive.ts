// core
import {
	Directive,
	Input,
	ElementRef,
	HostListener
} from '@angular/core';

@Directive({
	selector: '[onlyNumber]',
})
export class OnlyNumberDirective {

	@Input('maxLength') maxLength: number;

	// permitir teclas especiales
	private specialKeys: Array<string> = [
		'Backspace',
		'Tab',
		'End',
		'Home',
		'ArrowLeft',
		'ArrowRight',
		'Enter'
	];

	// regex de solo número
	private regex: RegExp = new RegExp(/^[0-9#*]+(\.[0-9#*]*){0,1}$/g);

	constructor(private el: ElementRef) { }

	@HostListener('keydown', ['$event'])
	@HostListener('paste', ['$event.target'])
	onkeyDown(event: KeyboardEvent) {
		if (this.specialKeys.includes(event.key)) {
			return;
		}
		let current: string = this.el.nativeElement.value;
		if (this.maxLength && this.maxLength === current.length) {
			event.preventDefault();
			return;
		}
		let next: string = current.concat(event.key);
		if (next && !String(next).match(this.regex)) {
			event.preventDefault();
		}
	}

}
