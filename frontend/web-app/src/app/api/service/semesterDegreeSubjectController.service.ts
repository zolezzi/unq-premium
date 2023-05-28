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
import { SemesterDegreeSubjectDTO } from '../model/semesterDegreeSubjectDTO';
import { SemesterDegreeSubjectFilterDTO } from '../model/semesterDegreeSubjectFilterDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SemesterDegreeSubjectControllerService {

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
     * This service delete a Subject
     * Delete a Subject, if it doesn&#39;t find it throw an exception
     * @param authorization 
     * @param degreeId degreeId
     * @param semesterDegreeSubjectId semesterDegreeSubjectId
     * @param semesterId semesterId
     * @param subjectId subjectId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteById(authorization: string, degreeId: number, semesterDegreeSubjectId: number, semesterId: number, subjectId: number, observe?: 'body', reportProgress?: boolean): Observable<BasicResponse>;
    public deleteById(authorization: string, degreeId: number, semesterDegreeSubjectId: number, semesterId: number, subjectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BasicResponse>>;
    public deleteById(authorization: string, degreeId: number, semesterDegreeSubjectId: number, semesterId: number, subjectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BasicResponse>>;
    public deleteById(authorization: string, degreeId: number, semesterDegreeSubjectId: number, semesterId: number, subjectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling deleteById2.');
        }
        if (degreeId === null || degreeId === undefined) {
            throw new Error('Required parameter degreeId was null or undefined when calling deleteById.');
        }
        if (semesterDegreeSubjectId === null || semesterDegreeSubjectId === undefined) {
            throw new Error('Required parameter semesterDegreeSubjectId was null or undefined when calling deleteById.');
        }
        if (semesterId === null || semesterId === undefined) {
            throw new Error('Required parameter semesterId was null or undefined when calling deleteById.');
        }
        if (subjectId === null || subjectId === undefined) {
            throw new Error('Required parameter subjectId was null or undefined when calling deleteById.');
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
        ];

        return this.httpClient.delete<BasicResponse>(`${this.basePath}/semester-degree-subject/delete/${encodeURIComponent(String(semesterDegreeSubjectId))}/${encodeURIComponent(String(semesterId))}/${encodeURIComponent(String(degreeId))}/${encodeURIComponent(String(subjectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Service that returns all objects relationship with semester, degrees and subjects by semester id
     * This service returns all objects and load relationship with semester, degrees and subjects by semester id
     * @param authorization 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchByFilter(authorization: string, filter: SemesterDegreeSubjectFilterDTO, observe?: 'body', reportProgress?: boolean): Observable<Array<SemesterDegreeSubjectDTO>>;
    public searchByFilter(authorization: string, filter: SemesterDegreeSubjectFilterDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SemesterDegreeSubjectDTO>>>;
    public searchByFilter(authorization: string, filter: SemesterDegreeSubjectFilterDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SemesterDegreeSubjectDTO>>>;
    public searchByFilter(authorization: string, filter: SemesterDegreeSubjectFilterDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling searchByFilter.');
        }
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling searchByFilter.');
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

        return this.httpClient.post<Array<SemesterDegreeSubjectDTO>>(`${this.basePath}/semester-degree-subject/search-by-filter`,
            filter,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
