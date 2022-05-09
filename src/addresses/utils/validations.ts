import * as _ from 'lodash';

// TODO: could add validation to check if correct data for country and province is being saved in the db.
export const validateCountryOrProvince = (
  country: string,
  province: string,
) => {};

export const checkForDuplicates = (data: object, records: any[]) => {
  return _.some(records, data);
};
