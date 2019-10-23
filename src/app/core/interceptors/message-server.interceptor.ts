import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Util } from '../utils/global';


@Injectable()
export class MessageServer implements HttpInterceptor {
    constructor(
        public snackBar: MatSnackBar,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req = request.clone({
            url: request.url,
            headers: request.headers.set('Content-Type', 'application/json')
        });
        return next.handle(req).pipe(
            tap(
                (event: any) => {
                    if (event.hasOwnProperty('body')) {
                        if (event.body.hasOwnProperty('message')) {
                            this.snackBar.open(event.body.message, 'Aceptar', Util.getCfgSnackBar('success'));
                        }
                    }
                    if (event instanceof HttpResponse) {
                    }
                },
                (err: any) => {
                    switch (err.status) {
                        case 500:
                            this.snackBar.open(err.error.message, 'Aceptar', Util.getCfgSnackBar('error'));
                            break;
                    }
                }
            ));
    }
}
