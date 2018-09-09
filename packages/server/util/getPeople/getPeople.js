// @flow

export default (country: string) => `
  PREFIX wd: <http://www.wikidata.org/entity/>
  PREFIX wdt: <http://www.wikidata.org/prop/direct/>
  PREFIX schema: <http://schema.org/>
   SELECT  DISTINCT ?fullName ?placeOfBirth ?article ?coords  WHERE {
  ?id wdt:P31 wd:Q5.
  ?id wdt:P19 ?pob.
  ?id wdt:P27 ?citizenship.
  ?pob wdt:P625 ?coords.
  ?article schema:about ?id.
  ?article schema:isPartOf <https://en.wikipedia.org/>.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?id rdfs:label ?fullName .
    ?pob rdfs:label ?placeOfBirth.
    ?citizenship rdfs:label ?citizenshipLabel.
  } ?citizenship ?label "${country}".
}LIMIT 1`;
