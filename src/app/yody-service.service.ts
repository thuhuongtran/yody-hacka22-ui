import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Design} from "./design";

@Injectable({
  providedIn: 'root'
})
export class YodyServiceService {
  public static apiURL: string = "https://yody-hack22-api.herokuapp.com/";

  constructor(private http: HttpClient) {
  }

  uploadFile(formData: FormData): Observable<String> {
    return this.http
      .post<String>(YodyServiceService.apiURL + "upload", formData)
      .pipe(tap((_) => console.log()));
  }

  searchDesignsByTags(tag: string[]): Observable<Design[]> {
    const params = new HttpParams().append('tags', tag.toString());
    return this.http
      .get<Design[]>(YodyServiceService.apiURL + "search-decor-image", {params})
  }

  searchCities(): Observable<String[]> {
    return this.http
      .get<String[]>(YodyServiceService.apiURL + "cities")
  }

  searchDistricts(): Observable<String[]> {
    return this.http
      .get<String[]>(YodyServiceService.apiURL + "districts")
  }

  searchWards(): Observable<String[]> {
    return this.http
      .get<String[]>(YodyServiceService.apiURL + "wards")
  }
}
