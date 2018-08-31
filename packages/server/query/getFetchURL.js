// @flow

export default (query: string) => `https://query.wikidata.org/sparql?query=${query}&format=json`;
