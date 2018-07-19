import { Injectable } from '@angular/core';

/*import swal, {
	SweetAlertOptions,
	SweetAlertType
} from 'sweetalert2';

import { URLS } from '../../config/urls.config';

import {
	HttpClient,
	HttpHeaders
} from '@angular/common/http'

import * as FileSaver from 'file-saver';

import { CORPORATIONS_INVITE } from '../../config/corporations.config';

//models
import {
	Unit,
	User,
	Denue,
	Message,
	Incident,
	MobilAgent,
	Polygon,
	Event
} from '../../models';

import { nameCorp } from '../utils/util';

declare var $: any;

type NotifyType = 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'primary'*/


import * as Snackbar from 'node-snackbar';

@Injectable()
export class UtilsService {

	/*private $notify: any = null;

	private swal: any;

	private urlUtils = URLS.utils;

	private defaultOptionsSwal: SweetAlertOptions = {
		width: '350px',
		padding: 10,
		showCancelButton: true,
		confirmButtonClass: 'btn btn-primary',
		cancelButtonClass: 'btn btn-default',
		cancelButtonText: 'Cancelar',
		confirmButtonText: 'Aceptar',
		buttonsStyling: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
		allowEnterKey: false,
		reverseButtons: true
	}
*/
  constructor() { }

  /**
   *
   */
  showToast(message: string): void {
    Snackbar.show({
      text: message,
      pos: 'top-right',
      actionText: 'Aceptar'
    });
  }



}
