// @flow

import SPARQLResult from '../domain/SPARQLResult';
import PersonalInfo from '../domain/PersonalInfo';
import Bindings from '../domain/Bindings';

export default (data: SPARQLResult): Array<PersonalInfo> => {
  const bindings: Bindings = data.re;
};
