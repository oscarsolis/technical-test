import {
  Injectable,
  isDevMode
} from '@angular/core';


enum LevelLogs {
  'INFO', 'WARN', 'ERROR', 'SUCCESS'
}

@Injectable()
export class DebugService {

  constructor() { }

  info(from: string, message?: any, ...args) {
    this._log(LevelLogs.INFO, from, message, args);
  }

  warn(from: string, message?: any, ...args) {
    this._log(LevelLogs.WARN, from, message, args);
  }

  error(from: string, message?: any, ...args) {
    this._log(LevelLogs.ERROR, from, message, args);
  }

  success(from: string, message?: any, ...args) {
    this._log(LevelLogs.SUCCESS, from, message, args);
  }

  private _log(level: LevelLogs, from: string, message?: string, additional: any[] = []) {
    if (!isDevMode()) {
      return;
    }
    let color: string = this._getCss(level);
    switch (level) {
      case LevelLogs.ERROR:
        console.log(`%c[${LevelLogs[level]} ${from}]: \n`, color, message, ...additional);
        break;
      case LevelLogs.WARN:
        console.log(`%c[${LevelLogs[level]} ${from}]: \n`, color, message, ...additional);
        break;
      case LevelLogs.INFO:
        console.log(`%c[${LevelLogs[level]} ${from}]: \n`, color, message, ...additional);
        break;
      case LevelLogs.SUCCESS:
        console.log(`%c[${LevelLogs[level]} ${from}]: \n`, color, message, ...additional);
        break;
    }

  }

  private _getCss(level: LevelLogs): string {
    let defaultCss: string = 'font-weight:bold; color: #FFFFFF; padding: 3px 6px; border-radius: 2px;';
    switch (level) {
      case LevelLogs.ERROR:
        return `${defaultCss} background-color: #d9534f;`;
      case LevelLogs.WARN:
        return `${defaultCss} background-color: #f0ad4e;`;
      case LevelLogs.INFO:
        return `${defaultCss} background-color: #5bc0de;`;
      case LevelLogs.SUCCESS:
        return `${defaultCss} background-color: #5cb85c;`;
    }
  }
}
