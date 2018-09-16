// @flow

import Coords from 'shared/domain/Coords';
import PersonalInfo from 'shared/domain/PersonalInfo';
import SPARQLResult from '../../domain/SPARQLResult';
import WikiData from '../../domain/WikiData';
import formatCoords from '../formatCoords/formatCoords';

export default (data: SPARQLResult): Array<PersonalInfo> => {
  const personalInfo: Array<PersonalInfo> = [];
  const fetchedData: Array<WikiData> = data.results.bindings;

  fetchedData.forEach((wikiData: WikiData) => {
    const name: string = wikiData.fullName.value;
    const pob: string = wikiData.placeOfBirth.value;
    const coords: Coords = formatCoords(wikiData.coords.value);
    const article: string = wikiData.article.value;
    personalInfo.push(new PersonalInfo(name, pob, coords, article));
  });

  return personalInfo;
};
