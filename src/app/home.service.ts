import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private url = "https://automacao.sucopodi.com.br/";

  constructor(private http: HttpClient) {}

  async getMyCompanies(owner: string) {
    let _url = "webhook/fafc7d7a-05e0-48dc-b95d-02f814e61bdb";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic eGNvYXBweGFtYW46WGVjb0FwcEB4YW1hbjc3Izc=",
    });
    const body = { owner: owner };
    const response = await this.http.post<any[]>(this.url + `${_url}`, body, {
      headers: headers,
    });

    return response;
  }

  async getProductsOfACompany(owner: string) {
    let _url = "webhook/f1d2bcaf-6d0f-4212-9ef0-4297c6fc1564";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic eGNvYXBweGFtYW46WGVjb0FwcEB4YW1hbjc3Izc=",
    });
    const body = { companyOwner: owner };
    const response = await this.http.post<any[]>(this.url + `${_url}`, body, {
      headers: headers,
    });

    return response;
  }

  async getAllCompaniesByCityAndUf(city: string, uf: string) {
    let _url = "webhook/060ddcb5-c743-4d4d-ac93-c7934fea781b";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic eGNvYXBweGFtYW46WGVjb0FwcEB4YW1hbjc3Izc=",
    });
    const body = { city: city, uf: uf };
    const response = await this.http.post<any[]>(this.url + `${_url}`, body, {
      headers: headers,
    });

    return response;
  }

  async getAllCitiesByState(state: string) {
    let _url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;

    const response = await this.http.get(_url);
    return response;
  }

  async getCompanyDetail(c: any) {
    let _url = "webhook/b9990b02-acc2-40d9-a3eb-d95ed10bf9cf";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic eGNvYXBweGFtYW46WGVjb0FwcEB4YW1hbjc3Izc=",
    });
    const body = { c: c };
    const response = await this.http.post<any[]>(this.url + `${_url}`, body, {
      headers: headers,
    });

    return response;
  }

  async getProductDetail(c: any) {
    let _url = "webhook/pd";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic eGNvYXBweGFtYW46WGVjb0FwcEB4YW1hbjc3Izc=",
    });
    const body = { p: c };
    const response = await this.http.post<any[]>(this.url + `${_url}`, body, {
      headers: headers,
    });

    return response;
  }
}
