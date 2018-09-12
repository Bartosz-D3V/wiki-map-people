// @flow

import SPARQLResult from '../../domain/SPARQLResult';
import PersonalInfo from '../../domain/PersonalInfo';
import WikiData from '../../domain/WikiData';
import Coords from '../../domain/Coords';
import formatCoords from '../formatCoords/formatCoords';

export default (data: SPARQLResult): Array<PersonalInfo> => {
  // console.log(data)
  const personalInfo: Array<PersonalInfo> = [];
  const fetchedData: Array<WikiData> = data.results.bindings;

  fetchedData.forEach((wikiData: WikiData) => {
    const name: string = wikiData.fullName.value;
    const pob: string = wikiData.placeOfBirth.value;
    const coords: Coords = formatCoords(wikiData.coords.value);
    const article: string = wikiData.article.value;
    personalInfo.push(new PersonalInfo(coords, article, name, pob));
  });

  return personalInfo;
};
