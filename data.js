var data = {
  "scenes": [
    {
      "id": "panorama1",
      "name": "Vista 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.57,
          "pitch": 0,
          "rotation": 0,
          "target": "panorama2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4128,
          "pitch": 0.4340,
          "title": "Sicyos angulatus",
          "text": " pianta annuale erbacea, rampicante. Possiede dei fusti lianosi mediamente lunghi a maturità tra i 2 e i 5 metri, ma che quando la pianta si trova in condizioni ambientali ottimali possono anche diventare più lunghi. Grazie a cirri ramosi questi possono aggrapparsi ad altre piante o sostegni di diverso tipo. Le foglie sono lobate ed ispide, di aspetto cuoriforme, e possono arrivare ai 7 cm di lunghezza. Si tratta di una pianta monoica, ovvero con fiori maschili e femminili distinti ma compresenti sullo stesso individuo. I fiori maschili sono riuniti in racemi, quelli femminili in capolini con pochi fiori; la loro corolla è giallastra ma poco significativa",
          "image": "hotspots/Sicyos_angulatus.jpg"
        }
      ]
    },
    {
      "id": "panorama2",
      "name": "Vista 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.57,
          "pitch": 0,
          "rotation": 0,
          "target": "panorama1"
        },
        {
          "yaw": 1.57,
          "pitch": 0,
          "rotation": 0,
          "target": "panorama3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "panorama3",
      "name": "Vista 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.57,
          "pitch": 0,
          "rotation": 0,
          "target": "panorama2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tour Virtuale",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
