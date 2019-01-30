import { Injectable } from '@angular/core';

@Injectable()
export class BaseHttpService {

  protected url = "/api";

  constructor() { }
}
