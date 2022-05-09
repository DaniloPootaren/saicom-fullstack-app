import { Injectable } from '@nestjs/common';
import * as Countries from './DATA/countries.json';
import * as AFprovince from './DATA/afghanistan.json';
import * as AUprovince from './DATA/australia.json';
import * as ZAprovince from './DATA/south-africa.json';

@Injectable()
export class AppService {
  getCountryList(): any {
    const afghanistan = Countries.find(
      (country) => country.name === 'Afghanistan',
    );

    const southAfrica = Countries.find(
      (country) => country.name === 'South Africa',
    );

    const australia = Countries.find((country) => country.name === 'Australia');

    afghanistan['provinces'] = AFprovince;
    southAfrica['provinces'] = ZAprovince;
    australia['provinces'] = AUprovince;

    return {
      countries: [afghanistan, southAfrica, australia],
    };
  }
}
