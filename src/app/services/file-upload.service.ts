import { Injectable } from "@angular/core";
import {ConstantsService} from './constants.service' ;
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType
} from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  SERVER_URL: string ;
  constructor(private httpClient: HttpClient,private service:ConstantsService) {}
  public uploadFile(data) {
    this.SERVER_URL=this.service.url;
    let uploadURL = this.SERVER_URL + "upload.php";
    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: "events"
    });
  }
}
