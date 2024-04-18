var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "故宮1樓",
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
        }
      ],
      "faceSize": 1701,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.009304105021564979,
          "pitch": 0.097900887591166,
          "rotation": 0,
          "target": "1-101"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-101",
      "name": "故宮101展間",
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
        }
      ],
      "faceSize": 1929.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8208594004965235,
          "pitch": 0.040954104002260294,
          "rotation": 1.5707963267948966,
          "target": "0-1"
        },
        {
          "yaw": 3.0504619785446723,
          "pitch": 0.026900043935064843,
          "rotation": 4.71238898038469,
          "target": "2-108"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-108",
      "name": "故宮108展間",
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
        }
      ],
      "faceSize": 1970.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8806251563864729,
          "pitch": -0.027836233090669182,
          "rotation": 1.5707963267948966,
          "target": "0-1"
        },
        {
          "yaw": 1.8660233889433435,
          "pitch": 0.19129113829497157,
          "rotation": 1.5707963267948966,
          "target": "2-108"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
