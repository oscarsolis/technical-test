// core
import {
  Component,
  ViewChild
} from '@angular/core';

// services
import {
  LogService,
  UtilsService,
  DebugService
} from '../../core/services';

// components
import { LoadingComponent } from '../../shared/components';

// others
import { MESSAGES } from '../../config/messages.config';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {

  //
  logs: Array<any> = [];

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _debug: DebugService,
    private _logService: LogService
  ) {
    this.getLogs();
  }

  /**
   *
   */
  getLogs(): void {
    this._logService
      .getLogs()
      .then(result => {
        this.loadingComponent.hide();
        this.logs = result.map(val => {
          if (val.user != null) {
            let name = `${val.user.name} ${val.user.paternalSurname} ${val.user.maternalSurname}`
            val.fullName = name;
          } else {
            val.fullName = 'Desconocido'
          }
          return val;
        });
        this.logs = result;
        this._debug.success('ListComponent getlogs()', result);
      })
      .catch(error => {
        this.loadingComponent.showMessageError();
        this._debug.error('ListComponent getlogs()', error);
      })
  }
}
