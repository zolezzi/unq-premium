/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { BasicResponse } from '../model/basicResponse';
import { SemesterDTO } from '../model/semesterDTO';
import { SemesterFilterDTO } from '../model/semesterFilterDTO';
import { SemesterVO } from '../model/semesterVO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SemesterControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * This service delete a Semester
     * Delete a Semester, if it doesn&#39;t find it throw an exception
     * @param authorization 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSemesterById(authorization: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<BasicResponse>;
    public deleteSemesterById(authorization: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicResponse>>;
    public deleteSemesterById(authorization: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicResponse>>;
    public deleteSemesterById(authorization: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling deleteSemesterById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSemesterById.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<BasicResponse>(`${this.basePath}/semester/delete-semester/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Service that return a Semester
     * This service return a Semester by the ID
     * @param authorization 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findSemesterById(authorization: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<SemesterDTO>;
    public findSemesterById(authorization: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SemesterDTO>>;
    public findSemesterById(authorization: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SemesterDTO>>;
    public findSemesterById(authorization: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling findSemesterById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findSemesterById.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<SemesterDTO>(`${this.basePath}/semester/find-semester-by-id/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This service save a Semester
     * Service that return SemesterDTO with saved object Semester
     * @param authorization 
     * @param semester semester
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveSemester(authorization: string, semester: SemesterVO, observe?: 'body', reportProgress?: boolean): Observable<SemesterDTO>;
    public saveSemester(authorization: string, semester: SemesterVO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SemesterDTO>>;
    public saveSemester(authorization: string, semester: SemesterVO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SemesterDTO>>;
    public saveSemester(authorization: string, semester: SemesterVO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling saveSemester.');
        }
        if (semester === null || semester === undefined) {
            throw new Error('Required parameter semester was null or undefined when calling saveSemester.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<SemesterDTO>(`${this.basePath}/semester/save-semester`,
            semester,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Service that returns Semesters filter by year
     * This service returns Semesters filter by year
     * @param authorization 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchSemestersByFilter(authorization: string, filter: SemesterFilterDTO, observe?: 'body', reportProgress?: boolean): Observable<Array<SemesterDTO>>;
    public searchSemestersByFilter(authorization: string, filter: SemesterFilterDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SemesterDTO>>>;
    public searchSemestersByFilter(authorization: string, filter: SemesterFilterDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SemesterDTO>>>;
    public searchSemestersByFilter(authorization: string, filter: SemesterFilterDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling searchSemestersByFilter.');
        }
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling searchSemestersByFilter.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String('Bearer ' + authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Array<SemesterDTO>>(`${this.basePath}/semester/search-semesters-by-filter`,
            filter,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * This service update a Semester
     * Update a semester, if it doesn&#39;t find it throw an exception
     * @param authorization 
     * @param id id
     * @param semester semester
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSemester(authorization: string, id: number, semester: SemesterDTO, observe?: 'body', reportProgress?: boolean): Observable<SemesterDTO>;
    public updateSemester(authorization: string, id: number, semester: SemesterDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SemesterDTO>>;
    public updateSemester(authorization: string, id: number, semester: SemesterDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SemesterDTO>>;
    public updateSemester(authorization: string, id: number, semester: SemesterDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling updateSemester.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateSemester.');
        }
        if (semester === null || semester === undefined) {
            throw new Error('Required parameter semester was null or undefined when calling updateSemester.');
        }

        let headers = this.defaultHeaders;
        if (authorization !== undefined && authorization !== null) {
            headers = headers.set('Authorization', String(authorization));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<SemesterDTO>(`${this.basePath}/semester/update-semester/${encodeURIComponent(String(id))}`,
            semester,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
