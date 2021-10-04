import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts(): string {
    return 'E-Source, Pro, Distributor Hub';
  }
}
