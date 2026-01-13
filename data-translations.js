// Traduzioni per i contenuti dei dati (hotspot, nomi scene)
var dataTranslations = {
  it: {
    sceneNames: {
      "panorama1": "Vista 1",
      "panorama2": "Vista 2",
      "panorama3": "Vista 3"
    },
    hotspots: {
      "Sicyos angulatus": {
        title: "Sicyos angulatus",
        text: " pianta annuale erbacea, rampicante. Possiede dei fusti lianosi mediamente lunghi a maturità tra i 2 e i 5 metri, ma che quando la pianta si trova in condizioni ambientali ottimali possono anche diventare più lunghi. Grazie a cirri ramosi questi possono aggrapparsi ad altre piante o sostegni di diverso tipo. Le foglie sono lobate ed ispide, di aspetto cuoriforme, e possono arrivare ai 7 cm di lunghezza. Si tratta di una pianta monoica, ovvero con fiori maschili e femminili distinti ma compresenti sullo stesso individuo. I fiori maschili sono riuniti in racemi, quelli femminili in capolini con pochi fiori; la loro corolla è giallastra ma poco significativa"
      }
    }
  },
  en: {
    sceneNames: {
      "panorama1": "View 1",
      "panorama2": "View 2",
      "panorama3": "View 3"
    },
    hotspots: {
      "Sicyos angulatus": {
        title: "Sicyos angulatus",
        text: "Annual herbaceous climbing plant. It has medium-length lianas that at maturity measure between 2 and 5 meters, but under optimal environmental conditions can become even longer. Thanks to ramified tendrils, these can cling to other plants or different types of supports. The leaves are lobed and hispid, heart-shaped in appearance, and can reach 7 cm in length. It is a monoecious plant, that is, with distinct male and female flowers but co-present on the same individual. The male flowers are arranged in racemes, the female ones in heads with few flowers; their corolla is yellowish but not very significant"
      }
    }
  }
};

// Funzione per ottenere traduzione di hotspot
function getHotspotTranslation(title) {
  var lang = currentLanguage || 'it';
  if (dataTranslations[lang] && dataTranslations[lang].hotspots && dataTranslations[lang].hotspots[title]) {
    return dataTranslations[lang].hotspots[title];
  }
  // Fallback a italiano se non trovato
  if (dataTranslations['it'] && dataTranslations['it'].hotspots && dataTranslations['it'].hotspots[title]) {
    return dataTranslations['it'].hotspots[title];
  }
  return null;
}

// Funzione per ottenere nome scene tradotto
function getSceneNameTranslation(sceneId) {
  var lang = currentLanguage || 'it';
  if (dataTranslations[lang] && dataTranslations[lang].sceneNames && dataTranslations[lang].sceneNames[sceneId]) {
    return dataTranslations[lang].sceneNames[sceneId];
  }
  // Fallback a italiano
  if (dataTranslations['it'] && dataTranslations['it'].sceneNames && dataTranslations['it'].sceneNames[sceneId]) {
    return dataTranslations['it'].sceneNames[sceneId];
  }
  return sceneId;
}
