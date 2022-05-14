import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { AxiosResponse } from 'axios'
import { Express } from 'express'
import { Observable } from 'rxjs'

@Injectable()
export class UploadService {
  constructor (
    private httpService: HttpService
  ) {}

  uploadImage (file: Express.Multer.File): Observable<AxiosResponse<any>> {
    return this.httpService.post('https://sm.ms/api/v2/upload', {
      smfile: file
    }, {
      headers: {
        Authorization: 'Basic YYEJYUWGipqlC8giSeDqQXYrDNqAlnCg',
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
