export default country => `
  PREFIX wd: <http://www.wikidata.org/entity/>
  PREFIX wdt: <http://www.wikidata.org/prop/direct/>
  PREFIX schema: <http://schema.org/>

  SELECT  DISTINCT ?id ?idLabel ?pobLabel ?citizenshipLabel ?article  WHERE {
  ?id wdt:P31 wd:Q5.
  ?id wdt:P19 ?pob.
  ?id wdt:P27 ?citizenship.
  ?article schema:about ?id.
  ?article schema:isPartOf <https://en.wikipedia.org/>.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?id rdfs:label ?idLabel .
    ?pob rdfs:label ?pobLabel.
    ?citizenship rdfs:label ?citizenshipLabel.
  } ?citizenship ?label "${country}".
  }`;
