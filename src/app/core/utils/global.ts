import { MatSnackBarConfig } from '@angular/material';

export class Util {
    static getCfgSnackBar(type: 'success' | 'error'): MatSnackBarConfig {
        const config = new MatSnackBarConfig();
        config.duration = 10000;
        config.verticalPosition = 'bottom';
        config.panelClass = [type === 'success' ? 'snackbar-success' : 'snackbar-error'];
        return config;
    }
}
