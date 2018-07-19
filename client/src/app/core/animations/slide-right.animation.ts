import {
	trigger,
	transition,
	keyframes,
	style,
	animate
} from '@angular/animations';

export const slideRightAnimation =
	trigger('slideRightAnimation', [
		transition(':enter', [
			animate(400, keyframes([
				style({
					'transform': 'translateX(100%)',
					'visibility': 'visible',
					'offset': 0
				}),
				style({
					'transform': 'translateX(0)',
					'offset': 1
				})
			]))
		]),
		transition(':leave', [
			animate(400, keyframes([
				style({
					'transform': 'translateX(0)',
					'offset': 0
				}),
				style({
					'visibility': 'hidden',
					'transform': 'translateX(100%)',
					'offset': 1
				})
			]))
		])
	])
