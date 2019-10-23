import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IRequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

@Injectable()
export class ApplicationHttp {
    private baseURL = 'http://localhost:3000/';

    constructor(
        private http: HttpClient
    ) {

    }

    /**
     * POST request
     * @param string endPoint end point of the api
     * @param Object params body of the request.
     * @param IRequestOptions options options of the request like headers, body, etc.
     * @returns Observable<T>
     */
    public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.baseURL + endPoint, options);
    }

    /**
     * POST request
     * @param string endPoint end point of the api
     * @param Object params body of the request.
     * @param IRequestOptions options options of the request like headers, body, etc.
     * @returns Observable<T>
     */
    public post<T>(endPoint: string, params: any, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.baseURL + endPoint, params, options);
    }

}
