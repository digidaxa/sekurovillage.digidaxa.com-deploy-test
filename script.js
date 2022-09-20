(function(){
    var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_338F6AEF_3EB7_0962_41C7_5C633A24BCCC",
  "this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D",
  "this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_155084E7_3ED0_F962_41BA_7DA703691080]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist,this.mainPlayList]); this.playList_428B5F39_5370_BAB1_41C6_1F2BFE57EA0C.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "propagateClick": false,
 "buttonToggleMute": "this.IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 20,
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "minWidth": 20,
 "definitions": [{
 "easing": "quad_in",
 "id": "effect_25FE7E90_3014_D1B3_41A1_6EBC34409425",
 "class": "SlideOutEffect",
 "duration": 400,
 "to": "left"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E42A061_5370_A6D1_418D_F5BFDE5E7DC4",
 "initialPosition": {
  "yaw": -164.48,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D261223_5370_AA51_41D2_14DB580815C4",
 "initialPosition": {
  "yaw": 152.72,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DAC22D3_5370_ABF0_41B7_F2EE40666248",
 "initialPosition": {
  "yaw": 178.21,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2",
 "width": 5184,
 "label": "IMG_6030",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2.png"
   }
  ]
 },
 "height": 3456
},
{
 "easing": "quad_in",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "class": "SlideOutEffect",
 "duration": 400,
 "to": "left"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
 "initialPosition": {
  "yaw": -147.66,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 7.53
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "9",
 "hfov": 360,
 "overlays": [
  "this.overlay_40BF9A4B_4FC8_A33F_41D1_C9B00223740A",
  "this.overlay_40BF8A4B_4FC8_A33F_41CD_83AF9C7E157A",
  "this.overlay_40BFAA4B_4FC8_A33F_41CB_FAE38FA92F71",
  "this.panorama_40BFDA4C_4FC8_A339_41D0_CD02A4C0591A"
 ],
 "id": "panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -108.43,
   "yaw": 54.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -170.59,
   "yaw": -77.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  },
  {
   "backwardYaw": 67.53,
   "yaw": -171.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_43400439_5370_AEB0_41C6_85CD75079623",
 "initialPosition": {
  "yaw": -30.22,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10",
 "width": 5184,
 "label": "IMG_6094",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C5F9322_5370_AA53_41BE_1C32B1B3DD18",
 "initialPosition": {
  "yaw": -87.48,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6",
 "width": 5184,
 "label": "IMG_6069",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DE32261_5370_AAD1_41C3_025A92D040CF",
 "initialPosition": {
  "yaw": -125.07,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EC68126_5370_A653_41C6_24DACBBFFC79",
 "initialPosition": {
  "yaw": 102.04,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EA8C1A1_5370_A651_41BF_C9A554C9D15C",
 "initialPosition": {
  "yaw": 137.71,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EE3914D_5370_A6D1_41BD_6AB18FECAC9A",
 "initialPosition": {
  "yaw": -93.94,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "26",
 "hfov": 360,
 "overlays": [
  "this.overlay_43273D27_4FC8_6176_41CD_84B35E747788",
  "this.overlay_4327ED28_4FC8_6179_41D2_ADEFCB49E803",
  "this.overlay_4327CD28_4FC8_6179_41D0_34BFEEA67B96",
  "this.panorama_4327AD28_4FC8_6179_41C8_1A8303379853"
 ],
 "id": "panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.75,
   "yaw": 91.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E"
  },
  {
   "backwardYaw": 108.29,
   "yaw": 10.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": 31.75,
   "yaw": -11.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DC18242_5370_AAD3_41C2_4E9C4D965747",
 "initialPosition": {
  "yaw": -83.32,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DA282B9_5370_ABB1_41CC_5328030D8CDA",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5ED12139_5370_A6B1_41D3_6E79C8DD0B5D",
 "initialPosition": {
  "yaw": -132.86,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CF5D3EE_5370_A9D0_41CE_569CC1C5952E",
 "initialPosition": {
  "yaw": -175.91,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_43607458_5370_AEFF_41D3_A5A0EAACA273",
 "initialPosition": {
  "yaw": -168.81,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
 "initialPosition": {
  "yaw": 6.1,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 5.76
 }
},
{
 "easing": "quad_in",
 "id": "effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0",
 "class": "FadeInEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "manualRotationSpeed": 1803,
 "automaticZoomSpeed": 10,
 "id": "camera_5D360232_5370_AAB3_41CA_CFF80C25F3F3",
 "initialPosition": {
  "yaw": -178.64,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8",
 "width": 5184,
 "label": "IMG_6087",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8.png"
   }
  ]
 },
 "height": 3456
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5",
 "hfov": 360,
 "overlays": [
  "this.overlay_4062BCD8_4FD8_A0D8_41D1_24E5F8A74D7A",
  "this.overlay_40624CD8_4FD8_A0D8_41AE_8BAB2EF92B85",
  "this.overlay_40625CD8_4FD8_A0D8_41C6_158829CBF50B",
  "this.panorama_40627CD8_4FD8_A0D8_41C1_F9D2E5E690C1"
 ],
 "id": "panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.43,
   "yaw": 50.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  },
  {
   "backwardYaw": -40.52,
   "yaw": -46.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_t.jpg",
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "22",
 "hfov": 360,
 "overlays": [
  "this.overlay_41BA5DC4_4FC8_6128_41C6_66BE5D3BED27",
  "this.overlay_41BA3DC4_4FC8_6128_419D_76554DB8625E",
  "this.overlay_41BA2DC4_4FC8_6128_41D0_598E0B7C4EF7",
  "this.panorama_41BA0DC4_4FC8_6128_41B2_598E3885F42E"
 ],
 "id": "panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": 91.9,
   "yaw": -94.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  },
  {
   "backwardYaw": -85.86,
   "yaw": 74.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D048204_5370_AA57_41C2_BD49A539ACEC",
 "initialPosition": {
  "yaw": 168.43,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D8D429A_5370_AA70_41D4_965718764967",
 "initialPosition": {
  "yaw": 177.9,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_5B21667B_4F08_3100_41C7_3B45A9C1819F",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "items": [
  {
   "camera": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
   "media": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
   "media": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
   "media": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
   "media": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
   "media": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
   "media": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
   "media": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
   "media": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
   "media": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
   "media": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
   "media": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
   "media": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
   "media": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
   "media": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
   "media": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
   "media": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
   "media": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
   "media": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
   "media": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
   "media": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
   "media": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
   "media": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
   "media": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
   "media": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
   "media": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E02C0D7_5370_A7F1_41CC_494840740E19",
 "initialPosition": {
  "yaw": -112.47,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7",
 "width": 5184,
 "label": "IMG_6086",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7.png"
   }
  ]
 },
 "height": 3456
},
{
 "easing": "quad_out",
 "id": "effect_4016129C_5467_90A7_41B5_2C5E462A0C83",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9",
 "width": 5184,
 "label": "IMG_6093",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9.png"
   }
  ]
 },
 "height": 3456
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "21",
 "hfov": 360,
 "overlays": [
  "this.overlay_41A77AC2_4FC8_E329_41C4_334D03040514",
  "this.overlay_41A75AC2_4FC8_E329_41D3_39A261A9C2B7",
  "this.panorama_41A74AC2_4FC8_E329_41B9_16C35AF49682"
 ],
 "id": "panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 15.52,
   "yaw": 92.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  },
  {
   "backwardYaw": -122.88,
   "yaw": 174.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
 "initialPosition": {
  "yaw": 6.03,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0.34
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2",
 "hfov": 360,
 "overlays": [
  "this.overlay_09F74AD2_06D9_5BA8_419A_1699CF3A4006",
  "this.overlay_0386A72F_0C48_24F0_418E_4644DDF1DDB9",
  "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_tcap0"
 ],
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -27.28,
   "yaw": 4.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "backwardYaw": 1.36,
   "yaw": 179.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_t.jpg",
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14",
 "width": 5184,
 "label": "IMG_6258",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E253105_5370_A651_41BF_CE1E2B61D179",
 "initialPosition": {
  "yaw": -71.71,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_in",
 "id": "effect_59CA1A81_4F08_D101_41D2_30683CB5E100",
 "class": "FadeInEffect",
 "duration": 200
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4",
 "width": 5184,
 "label": "IMG_6050",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4.png"
   }
  ]
 },
 "height": 3456
},
{
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetHfov": 80,
   "targetPitch": 15.71,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "yaw": 2.05,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "manualRotationSpeed": 1803,
 "automaticZoomSpeed": 10,
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
 "initialPosition": {
  "yaw": 2.05,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 15.71
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
 "initialPosition": {
  "yaw": -47.43,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 3.92
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "23",
 "hfov": 360,
 "overlays": [
  "this.overlay_4190C09B_4FC9_9F5F_41C8_2308EB2F1C04",
  "this.overlay_4190D09B_4FC9_9F5F_41B6_C80AD4B3078D",
  "this.overlay_4190E09B_4FC9_9F5F_41C0_5CA231B362F9",
  "this.panorama_4190809B_4FC9_9F5F_41D0_5938FA7831DF"
 ],
 "id": "panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 174.92,
   "yaw": -122.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2"
  },
  {
   "backwardYaw": -3.25,
   "yaw": -40.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": -42.29,
   "yaw": 38.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_t.jpg",
 "partial": false
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "id": "map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1024,
 "label": "floorplan",
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_lq.jpeg",
    "width": 313,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 209
   }
  ]
 },
 "overlays": [
  "this.overlay_2A6B646A_3EF1_1962_41C4_FD41B45A4861",
  "this.overlay_2A1C335A_3EF7_18A2_41C5_8BFDFA71FD07",
  "this.overlay_2B7B5AE9_3EF1_096E_41C7_58416DF15D49",
  "this.overlay_29F9B04C_3EF1_F8A6_41BC_3510B8DFE04B",
  "this.overlay_29BE8983_3EF1_0BA2_41C4_1C71805D4965",
  "this.overlay_28B42D8E_3EF3_0BA5_41AF_C62A896CD8AE",
  "this.overlay_28300FF2_3EF3_0762_418E_C8B817602814",
  "this.overlay_2941EEB3_3EF1_09E2_41C6_5CD64DA63BFC",
  "this.overlay_26742D38_3EFF_08EE_41C4_EA7BCC4742E5",
  "this.overlay_262DFBC5_3EFF_0FA6_41C3_50F6A97B310D",
  "this.overlay_26CF6034_3EF1_38E6_41A9_2CADA3D4ACAB",
  "this.overlay_26D7F923_3EF1_08E2_41C4_97DC3AE9DF35",
  "this.overlay_263DCCAA_3EF3_09ED_4174_527BB1EED459",
  "this.overlay_24CA2A98_3EF1_09AE_41C6_8FC8ACC49A76",
  "this.overlay_27E350CC_3EF1_19A6_41C0_4B072DD9EC05",
  "this.overlay_24B9CE46_3EF7_08A2_41BF_F83979A9F3B9",
  "this.overlay_245DB2FE_3EF0_F962_41BC_D844CEC37FAC",
  "this.overlay_25716BFE_3EF1_0F63_41BA_FA99A785AAD3",
  "this.overlay_25A2EEF9_3EF3_096E_41B9_EB7E3DB85937",
  "this.overlay_238FF28B_3EF3_19A2_41C9_2CB943A6293D",
  "this.overlay_22C80EC5_3EF1_09A6_41CB_CD16C463E155",
  "this.overlay_232EBFA6_3EEF_07E3_41A3_65042B7AC827",
  "this.overlay_20B6946F_3EEF_1962_41C3_2F2344657A9B",
  "this.overlay_23728712_3ED1_78A2_41BC_37F9D8C5ADF1",
  "this.overlay_21EC967E_3ED1_7962_41C1_CCE1F6AE8835"
 ],
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_t.jpg",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 682
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C4F9307_5370_AA51_41B6_8C947223E96A",
 "initialPosition": {
  "yaw": 94.14,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
 "initialPosition": {
  "yaw": 17.79,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 3.71
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D74B1F3_5370_A9B1_41CC_DD540723FE08",
 "initialPosition": {
  "yaw": 65.25,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C795356_5370_AAF0_41AE_5685A8E069B9",
 "initialPosition": {
  "yaw": -105.23,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E0F20E6_5370_A7D3_41D1_90B27F412061",
 "initialPosition": {
  "yaw": 47.02,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "7",
 "hfov": 360,
 "overlays": [
  "this.overlay_407217A6_4FD7_E168_41CC_45148E86AB38",
  "this.panorama_407207A6_4FD7_E168_41BE_CA5D8F18CCDC"
 ],
 "id": "panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.79,
   "yaw": 47.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CB6A42A_5370_AE50_41C0_64C327D00489",
 "initialPosition": {
  "yaw": 100.58,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5",
 "width": 5184,
 "label": "IMG_6059",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DD1F251_5370_AAF1_41C4_317D977A6FCC",
 "initialPosition": {
  "yaw": -95.36,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CA1441A_5370_AE70_41C2_EBE2B312AB98",
 "initialPosition": {
  "yaw": -129.68,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
 "initialPosition": {
  "yaw": 172.58,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 5.34
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "10",
 "hfov": 360,
 "overlays": [
  "this.overlay_4097FF3B_4FC9_A15F_41B2_4126521DD4D7",
  "this.overlay_40978F3B_4FC9_A15F_41BB_D2EAE7F375AC",
  "this.panorama_4097AF3B_4FC9_A15F_41C4_DB2235EF38D9"
 ],
 "id": "panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.68,
   "yaw": 11.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  },
  {
   "backwardYaw": 84.64,
   "yaw": -179.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EBB01B0_5370_A64F_41C5_E4A602ED3C2F",
 "initialPosition": {
  "yaw": -141.57,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4373E468_5370_AEDF_41C8_659EA90DE606",
 "initialPosition": {
  "yaw": -176.56,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "24",
 "hfov": 360,
 "overlays": [
  "this.overlay_418839CB_4FC8_613F_41AB_E4A55ED4493C",
  "this.overlay_418819CB_4FC8_613F_41C2_1624C2F04E19",
  "this.overlay_418809CB_4FC8_613F_41A2_DFC5546318B7",
  "this.panorama_4189E9CB_4FC8_613F_4191_33231F726287"
 ],
 "id": "panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.07,
   "yaw": -3.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -8.96,
   "yaw": -114.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  },
  {
   "backwardYaw": 10.56,
   "yaw": 108.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_t.jpg",
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "25",
 "hfov": 360,
 "overlays": [
  "this.overlay_4184786E_4FC8_EFF9_41CE_5C345B27EC55",
  "this.overlay_4184586E_4FC8_EFF9_41C8_2A841176E5B1",
  "this.overlay_4185B86E_4FC8_EFF9_41C7_B77D16C5F0EC",
  "this.panorama_4185986E_4FC8_EFF9_41D1_13CB248DEDE0"
 ],
 "id": "panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.75,
   "yaw": -42.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -114.75,
   "yaw": -8.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": -11.57,
   "yaw": 31.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_t.jpg",
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0",
 "width": 5184,
 "label": "IMG_6015",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0.png"
   }
  ]
 },
 "height": 3456
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1",
 "hfov": 360,
 "overlays": [
  "this.overlay_09858E54_06C6_DAA8_4187_EF4427796952",
  "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0"
 ],
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.98,
   "yaw": 1.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_t.jpg",
 "partial": false
},
{
 "from": "left",
 "easing": "quad_in",
 "id": "effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB",
 "class": "SlideInEffect",
 "duration": 400
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
 "initialPosition": {
  "yaw": 59.68,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": -0.64
 }
},
{
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
 "playList": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList",
 "label": "Photo Album IMG_6015",
 "class": "PhotoAlbum"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C3A03B0_5370_A9B0_41D0_15B61E1110B0",
 "initialPosition": {
  "yaw": -169.44,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EFD216E_5370_A6D3_41C6_4838E98BEAF6",
 "initialPosition": {
  "yaw": 133.95,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D161214_5370_AA77_41C2_1193C28BE577",
 "initialPosition": {
  "yaw": -25.12,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E568099_5370_A671_41CA_DB820C1F66B0",
 "initialPosition": {
  "yaw": -93.02,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "12",
 "hfov": 360,
 "overlays": [
  "this.overlay_40F864AD_4FC8_E77B_41CB_9249DB79C971",
  "this.overlay_40F844AD_4FC8_E77B_41C9_9EDDD377188D",
  "this.panorama_40F994AD_4FC8_E77B_4160_AF92260D4A2F"
 ],
 "id": "panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 149.78,
   "yaw": -179.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "backwardYaw": -104.17,
   "yaw": 3.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D4BB1C0_5370_A9CF_41D0_089326D60417",
 "initialPosition": {
  "yaw": 139.48,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
 "initialPosition": {
  "yaw": 3.41,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 6.32
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "14",
 "hfov": 360,
 "overlays": [
  "this.overlay_4114130F_4FC8_A136_4167_50901FC0E646",
  "this.overlay_41142310_4FC8_A129_41C6_EA42B22E9D9A",
  "this.panorama_41143310_4FC8_A129_41D3_75C83326E6B5"
 ],
 "id": "panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.25,
   "yaw": -13.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -3.71,
   "yaw": 180,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_t.jpg",
 "partial": false
},
{
 "class": "MediaAudio",
 "data": {
  "label": "Snowy Peaks pt I - Chris Haugen"
 },
 "id": "audio_155084E7_3ED0_F962_41BA_7DA703691080",
 "audio": {
  "mp3Url": "media/audio_155084E7_3ED0_F962_41BA_7DA703691080.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_155084E7_3ED0_F962_41BA_7DA703691080.ogg"
 },
 "autoplay": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DF32273_5370_AAB1_41CE_907FDCBD4F03",
 "initialPosition": {
  "yaw": 76.11,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
 "initialPosition": {
  "yaw": -1.47,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 7.99
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E8FF17F_5370_A6B1_4199_92F9522621C4",
 "initialPosition": {
  "yaw": -5.08,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "20",
 "hfov": 360,
 "overlays": [
  "this.overlay_415C91E9_4FCF_A0FB_41C7_AA957E42797E",
  "this.overlay_415CB1E9_4FCF_A0FB_4161_5347794EA51E",
  "this.panorama_415CC1E9_4FCF_A0FB_41D3_44FC435F4DFE"
 ],
 "id": "panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 137.91,
   "yaw": 24.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C69333C_5370_AAB0_41C0_AAF54F08F762",
 "initialPosition": {
  "yaw": 0.4,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_42813F30_5370_BA4F_41C2_6055FD7BCADE, [this.htmltext_42860F32_5370_BAB3_41D3_38ED3BE7BDDF,this.component_42859F35_5370_BAB1_41C9_6BEF0109C3F9,this.component_4285FF35_5370_BAB1_41B0_A3764E540AB4], 2000)",
 "items": [
  "this.albumitem_4281CF2F_5370_BA51_41C4_C0A7EB6741AD"
 ],
 "id": "playList_42831F2C_5370_BA57_41B8_A11DF5171602"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "18",
 "hfov": 360,
 "overlays": [
  "this.overlay_410BDA29_4FC8_637B_41C1_F8B2ADE7F80D",
  "this.overlay_410BAA29_4FC8_637B_41D1_29C321776BE2",
  "this.panorama_410BBA29_4FC8_637B_41B0_CE8C58B79BAC"
 ],
 "id": "panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.1,
   "yaw": -179.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  },
  {
   "backwardYaw": 180,
   "yaw": -3.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
 "initialPosition": {
  "yaw": -72.43,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": -2.04
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
 "initialPosition": {
  "yaw": 2.25,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 5.21
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C97640B_5370_AE50_41A4_874CFFA08868",
 "initialPosition": {
  "yaw": 0.98,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DBC12ED_5370_ABD1_41D4_63134C50E072",
 "initialPosition": {
  "yaw": -88.1,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "6",
 "hfov": 360,
 "overlays": [
  "this.overlay_407E7E1D_4FD8_635B_41C0_FEDCC4DA5519",
  "this.overlay_407E6E1D_4FD8_635B_41B0_1B166296BF15",
  "this.panorama_407E5E1D_4FD8_635B_41CA_578B457364DC"
 ],
 "id": "panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.96,
   "yaw": -170.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": 47.14,
   "yaw": -1.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_t.jpg",
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "11",
 "hfov": 360,
 "overlays": [
  "this.overlay_41725950_4FC8_E129_41D0_A363A1814D7A",
  "this.overlay_4173B950_4FC8_E129_41B4_A6DE57466C4C",
  "this.overlay_41738950_4FC8_E129_41CC_1109888046B1",
  "this.panorama_4173E950_4FC8_E129_41D0_2A2EE8120A85"
 ],
 "id": "panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.19,
   "yaw": 96.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 3.44,
   "yaw": -104.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F"
  },
  {
   "backwardYaw": -179.76,
   "yaw": -2.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CD5F3D0_5370_A9F0_41C1_4315B12C215E",
 "initialPosition": {
  "yaw": 176.29,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3",
 "width": 5184,
 "label": "IMG_6040",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D6531E2_5370_A9D3_41C1_CDFE215B0FEA",
 "initialPosition": {
  "yaw": -141.25,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "from": "left",
 "easing": "quad_in",
 "id": "effect_4F69C86C_5705_6B41_41BC_5E5273634FBF",
 "class": "SlideInEffect",
 "duration": 400
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12",
 "width": 5184,
 "label": "IMG_6141",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12.png"
   }
  ]
 },
 "height": 3456
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "8",
 "hfov": 360,
 "overlays": [
  "this.overlay_405FC15E_4FC8_61D9_41D1_AD7AA3ABAF45",
  "this.overlay_405FB15F_4FC8_61D8_41C7_AF53FD59C8B8",
  "this.overlay_405F915F_4FC8_61D8_41C3_A8BDCFFE681E",
  "this.panorama_405F715F_4FC8_61D8_415D_75AB649D3705"
 ],
 "id": "panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.06,
   "yaw": -79.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "backwardYaw": -171.16,
   "yaw": 67.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": -46.05,
   "yaw": -40.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_t.jpg",
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1",
 "width": 5184,
 "label": "IMG_6029",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E9EF18F_5370_A650_41CE_2BC26FF603BC",
 "initialPosition": {
  "yaw": 176.75,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13",
 "width": 5184,
 "label": "IMG_6183",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13.png"
   }
  ]
 },
 "height": 3456
},
{
 "easing": "quad_out",
 "id": "effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E74E0C8_5370_A7DF_41CF_00602FDD280D",
 "initialPosition": {
  "yaw": 9.41,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CE5C3DF_5370_A9F0_41BB_ED6882750E3C",
 "initialPosition": {
  "yaw": -0.02,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "19",
 "hfov": 360,
 "overlays": [
  "this.overlay_416C0FD6_4FCF_A128_41CE_DE01AB8CF5E9",
  "this.overlay_416C2FD6_4FCF_A128_41BA_893C4C516613",
  "this.overlay_416CFFD6_4FCF_A128_41C8_1E0DF759EE2E",
  "this.overlay_416C9FD6_4FCF_A128_418E_352F3A876F6F",
  "this.panorama_416CAFD6_4FCF_A128_41D0_921E121B19C4"
 ],
 "id": "panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.52,
   "yaw": 15.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2"
  },
  {
   "backwardYaw": -179.6,
   "yaw": 84.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 74.77,
   "yaw": -85.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E"
  },
  {
   "backwardYaw": 24.42,
   "yaw": 137.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C18B390_5370_AA70_41A9_FCC3832B3131",
 "initialPosition": {
  "yaw": 139.93,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EF2F15D_5370_A6F1_41AD_9C3B8C31567A",
 "initialPosition": {
  "yaw": 8.84,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E482079_5370_A6B1_418C_992DC7F56E6A",
 "initialPosition": {
  "yaw": 57.12,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
 "initialPosition": {
  "yaw": 44.32,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 5.13
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E1820F5_5370_A7B1_41CD_4515413CCF78",
 "initialPosition": {
  "yaw": 85.25,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_40355B01_547B_B1A1_41C1_07A687AFC47C",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "easing": "quad_in",
 "id": "effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1",
 "class": "FadeInEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D5521D1_5370_A9F1_41C4_A233EBA1CC0B",
 "initialPosition": {
  "yaw": -42.09,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11",
 "width": 5184,
 "label": "IMG_6111",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11.png"
   }
  ]
 },
 "height": 3456
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C8733FD_5370_A9B0_41BF_760848423129",
 "initialPosition": {
  "yaw": -100.6,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_580FF761_4F08_3F00_4191_91ACF9401F9E",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
 "initialPosition": {
  "yaw": -18.29,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 2.82
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C28F3A1_5370_AA50_41C4_3B084090D97F",
 "initialPosition": {
  "yaw": 171.04,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_59CA3A81_4F08_D101_41D3_0462DF8FB066",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4303A478_5370_AEBF_41C0_C940771ADFEE",
 "initialPosition": {
  "yaw": 0.24,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
 "initialPosition": {
  "yaw": -177.19,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 7.54
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "16",
 "hfov": 360,
 "overlays": [
  "this.overlay_40C1444C_4FCB_A738_4199_3EF68EFC8C23",
  "this.overlay_40C1744C_4FCB_A738_41CA_426B1FF2DA01",
  "this.overlay_40C1144C_4FCB_A738_41BB_C5CC13E78653",
  "this.panorama_40C1D44C_4FCB_A738_41BE_99794C08F6BF"
 ],
 "id": "panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 54.93,
   "yaw": -108.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": -103.89,
   "yaw": 86.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0"
  },
  {
   "backwardYaw": -13.88,
   "yaw": -179.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E68C0B8_5370_A7BF_4166_00F396F36F80",
 "initialPosition": {
  "yaw": 71.57,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3",
 "hfov": 360,
 "overlays": [
  "this.overlay_1575EF7B_07DA_F958_417A_10159269154E",
  "this.overlay_1569D0A2_07D9_C7E8_418D_F6A87A767BBA",
  "this.overlay_15797AE0_07C6_FB68_4191_0A425FDD5056",
  "this.overlay_169BCCE6_07C9_FF68_4165_ED728F142633",
  "this.overlay_15E0862A_07C9_4AF8_4161_D8539EDF9E0C",
  "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_tcap0"
 ],
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.09,
   "yaw": -27.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C"
  },
  {
   "backwardYaw": 79.4,
   "yaw": -132.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0"
  },
  {
   "backwardYaw": -179.02,
   "yaw": 149.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F"
  },
  {
   "backwardYaw": 50.32,
   "yaw": 38.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315"
  },
  {
   "backwardYaw": -79.42,
   "yaw": 86.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "4",
 "hfov": 360,
 "overlays": [
  "this.overlay_4080DECE_4FC8_6338_41CD_7F7B3CE0BC96",
  "this.panorama_4080CECE_4FC8_6338_41D2_5A54411F615F"
 ],
 "id": "panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -132.98,
   "yaw": 79.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_t.jpg",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
 "initialPosition": {
  "yaw": -131.21,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0.87
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "17",
 "hfov": 360,
 "overlays": [
  "this.overlay_411D7F1E_4FC9_E159_41D0_9F0063E695C1",
  "this.overlay_411D6F1E_4FC9_E159_41BE_6CB5B3128BC0",
  "this.panorama_411D5F1F_4FC9_E157_41AA_578F1A402C19"
 ],
 "id": "panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": 154.88,
   "yaw": -108.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_t.jpg",
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "13",
 "hfov": 360,
 "overlays": [
  "this.overlay_40CEC2CE_4FCB_A339_41B0_72A5B3195890",
  "this.overlay_40CEF2CF_4FCB_A337_41B6_17009B06203D",
  "this.panorama_40CF02CF_4FCB_A337_41C8_65B02C1C4EAC"
 ],
 "id": "panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.98,
   "yaw": -103.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -108.81,
   "yaw": 154.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC"
  }
 ],
 "vfov": 180,
 "hfovMax": 80,
 "thumbnailUrl": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_t.jpg",
 "partial": false
},
{
 "easing": "quad_out",
 "id": "effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5DFD428B_5370_AA51_41B0_4035C62DE3BC",
 "initialPosition": {
  "yaw": 166.12,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
 "initialPosition": {
  "yaw": 43.78,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": -3.33
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_428B5F39_5370_BAB1_41C6_1F2BFE57EA0C",
 "class": "PlayList"
},
{
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "id": "window_16B0FE91_3EF3_09BE_41CD_05098004CBAF",
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "width": 400,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "headerBorderSize": 0,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPaddingLeft": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "headerBackgroundOpacity": 0,
 "closeButtonBorderRadius": 11,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "modal": true,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "footerHeight": 5,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverBackgroundColor": [],
 "minWidth": 20,
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "height": 600,
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "closeButtonBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "footerBackgroundColorDirection": "vertical",
 "bodyPaddingBottom": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "headerBackgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "closeButtonIconHeight": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColor": [],
 "title": "",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "shadow": true,
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPaddingTop": 0,
 "headerPaddingBottom": 5,
 "veilOpacity": 0.4,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "titlePaddingLeft": 5,
 "titleFontColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "titleFontWeight": "normal",
 "children": [
  "this.container_42813F30_5370_BA4F_41C2_6055FD7BCADE"
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "propagateClick": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "layout": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "overflow": "scroll",
 "shadowHorizontalLength": 3,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "horizontalAlign": "center",
 "titleFontStyle": "normal",
 "class": "Window",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconColor": "#B2B2B2",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundOpacity": 1,
 "data": {
  "name": "Window55882"
 },
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "closeButtonBackgroundColorRatios": [],
 "shadowOpacity": 0.5
},
{
 "easing": "quad_out",
 "id": "effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "easing": "quad_in",
 "id": "effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D",
 "class": "FadeInEffect",
 "duration": 200
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_43501448_5370_AED0_41CF_F298754E0D3A",
 "initialPosition": {
  "yaw": 75.83,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5C093376_5370_AAB0_41C9_4B73A6831829",
 "initialPosition": {
  "yaw": -155.58,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
 "initialPosition": {
  "yaw": 145.58,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 11.22
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E5D50A8_5370_A65F_41C7_CC8E3C156375",
 "initialPosition": {
  "yaw": 71.19,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
 "initialPosition": {
  "yaw": 66.71,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 4.02
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5CCA03C1_5370_A9D0_41D4_06F1AF1A9413",
 "initialPosition": {
  "yaw": 0.75,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "gyroscopeEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F"
},
{
 "items": [
  {
   "camera": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
   "media": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
   "media": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
   "media": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
   "media": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
   "media": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
   "media": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
   "media": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
   "media": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
   "media": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
   "media": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
   "media": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
   "media": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
   "media": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
   "media": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
   "media": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
   "media": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
   "media": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
   "media": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
   "media": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
   "media": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
   "media": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
   "media": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
   "media": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
   "media": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
   "media": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 25, 0)",
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E340115_5370_A671_41BC_0110207D610D",
 "initialPosition": {
  "yaw": -148.25,
  "hfov": 80,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "easing": "quad_out",
 "id": "effect_406C8EDB_5426_70A1_41AB_C419AD03A638",
 "class": "FadeOutEffect",
 "duration": 200
},
{
 "easing": "quad_in",
 "id": "effect_580F8760_4F08_3F00_41AC_F78771BB3ADF",
 "class": "FadeInEffect",
 "duration": 200
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "borderSize": 0,
 "minHeight": 50,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 5,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#9BC1BB"
 ],
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#000066",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338F6AEF_3EB7_0962_41C7_5C633A24BCCC",
 "left": "0%",
 "width": 330,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80",
  "this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "contentOpaque": false
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_1EDE886C_3F5F_0966_41BC_353B57EC559D",
 "children": [
  "this.MapViewer",
  "this.IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "2.48%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "width": "71.392%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "11.5%",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Containerfloorplan"
 },
 "height": "75.374%",
 "contentOpaque": false,
 "visible": false,
 "backgroundOpacity": 0.3
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC",
 "children": [
  "this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A",
  "this.IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7"
 ],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "right": "0%",
 "propagateClick": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "width": "14.431%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Containerkanan"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
 "width": 27,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 28,
 "paddingLeft": 0,
 "mode": "toggle",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Sound"
 },
 "maxWidth": 60,
 "iconURL": "skin/IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D.png",
 "maxHeight": 60
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
 "width": 29,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 30,
 "paddingLeft": 0,
 "mode": "toggle",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "maxWidth": 60,
 "iconURL": "skin/IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30.png",
 "maxHeight": 60
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D, this.camera_5E74E0C8_5370_A7DF_41CF_00602FDD280D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_0_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 435
     }
    ]
   },
   "pitch": 1.44,
   "yaw": -77.96,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -77.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.44
  }
 ],
 "id": "overlay_40BF9A4B_4FC8_A33F_41D1_C9B00223740A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_5E02C0D7_5370_A7F1_41CC_494840740E19); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 17.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_1_0.png",
      "width": 650,
      "class": "ImageResourceLevel",
      "height": 678
     }
    ]
   },
   "pitch": 0.69,
   "yaw": -171.16,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.69,
   "yaw": -171.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.69
  }
 ],
 "id": "overlay_40BF8A4B_4FC8_A33F_41CD_83AF9C7E157A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_5E68C0B8_5370_A7BF_4166_00F396F36F80); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_2_0.png",
      "width": 525,
      "class": "ImageResourceLevel",
      "height": 525
     }
    ]
   },
   "pitch": 4.66,
   "yaw": 54.93,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.24,
   "yaw": 54.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.66
  }
 ],
 "id": "overlay_40BFAA4B_4FC8_A33F_41CB_FAE38FA92F71",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_40BFDA4C_4FC8_A339_41D0_CD02A4C0591A",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_5E340115_5370_A671_41BC_0110207D610D); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ]
   },
   "pitch": 0.1,
   "yaw": -11.57,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.4,
   "yaw": -11.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 0.1
  }
 ],
 "id": "overlay_43273D27_4FC8_6176_41CD_84B35E747788",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_5E253105_5370_A651_41BF_CE1E2B61D179); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_1_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ]
   },
   "pitch": -0.54,
   "yaw": 10.56,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 10.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "id": "overlay_4327ED28_4FC8_6179_41D2_ADEFCB49E803",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E, this.camera_5E1820F5_5370_A7B1_41CD_4515413CCF78); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_2_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 330
     }
    ]
   },
   "pitch": -0.07,
   "yaw": 91.9,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.43,
   "yaw": 91.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.07
  }
 ],
 "id": "overlay_4327CD28_4FC8_6179_41D0_34BFEEA67B96",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4327AD28_4FC8_6179_41C8_1A8303379853",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_5EBB01B0_5370_A64F_41C5_E4A602ED3C2F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_0_0.png",
      "width": 534,
      "class": "ImageResourceLevel",
      "height": 492
     }
    ]
   },
   "pitch": 2.89,
   "yaw": 50.32,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.54,
   "yaw": 50.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.89
  }
 ],
 "id": "overlay_4062BCD8_4FD8_A0D8_41D1_24E5F8A74D7A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_5D4BB1C0_5370_A9CF_41D0_089326D60417); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_1_0.png",
      "width": 436,
      "class": "ImageResourceLevel",
      "height": 432
     }
    ]
   },
   "pitch": 0.21,
   "yaw": -46.05,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.9,
   "yaw": -46.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.21
  }
 ],
 "id": "overlay_40624CD8_4FD8_A0D8_41AE_8BAB2EF92B85",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_2_0.png",
      "width": 592,
      "class": "ImageResourceLevel",
      "height": 623
     }
    ]
   },
   "pitch": 2.84,
   "yaw": -101.53,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.11,
   "yaw": -101.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.84
  }
 ],
 "id": "overlay_40625CD8_4FD8_A0D8_41C6_158829CBF50B",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_40627CD8_4FD8_A0D8_41C1_F9D2E5E690C1",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_5DBC12ED_5370_ABD1_41D4_63134C50E072); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_0_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 303
     }
    ]
   },
   "pitch": 0.39,
   "yaw": -94.75,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": -94.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.39
  }
 ],
 "id": "overlay_41BA5DC4_4FC8_6128_41C6_66BE5D3BED27",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_1_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ]
   },
   "pitch": 1.22,
   "yaw": -8.25,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.12,
   "yaw": -8.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.22
  }
 ],
 "id": "overlay_41BA3DC4_4FC8_6128_419D_76554DB8625E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_5C4F9307_5370_AA51_41B6_8C947223E96A); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_2_0.png",
      "width": 324,
      "class": "ImageResourceLevel",
      "height": 303
     }
    ]
   },
   "pitch": 0.37,
   "yaw": 74.77,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.84,
   "yaw": 74.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.37
  }
 ],
 "id": "overlay_41BA2DC4_4FC8_6128_41D0_598E0B7C4EF7",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_41BA0DC4_4FC8_6128_41B2_598E3885F42E",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_5E42A061_5370_A6D1_418D_F5BFDE5E7DC4); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_0_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ]
   },
   "pitch": 0,
   "yaw": 92.52,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.01,
   "yaw": 92.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0
  }
 ],
 "id": "overlay_41A77AC2_4FC8_E329_41C4_334D03040514",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_5E482079_5370_A6B1_418C_992DC7F56E6A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_1_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ]
   },
   "pitch": 1.68,
   "yaw": 174.92,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.01,
   "yaw": 174.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.68
  }
 ],
 "id": "overlay_41A75AC2_4FC8_E329_41D3_39A261A9C2B7",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_41A74AC2_4FC8_E329_41B9_16C35AF49682",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_5D261223_5370_AA51_41D2_14DB580815C4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_0_0.png",
      "width": 502,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ]
   },
   "pitch": 1.63,
   "yaw": 4.09,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 4.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.63
  }
 ],
 "id": "overlay_09F74AD2_06D9_5BA8_419A_1699CF3A4006",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49, this.camera_5D360232_5370_AAB3_41CA_CFF80C25F3F3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_2_0.png",
      "width": 695,
      "class": "ImageResourceLevel",
      "height": 597
     }
    ]
   },
   "pitch": 7.18,
   "yaw": 179.98,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.67,
   "yaw": 179.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.18
  }
 ],
 "id": "overlay_0386A72F_0C48_24F0_418E_4644DDF1DDB9",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2, this.camera_5E8FF17F_5370_A6B1_4199_92F9522621C4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_0_0.png",
      "width": 410,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ]
   },
   "pitch": 2.46,
   "yaw": -122.88,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.17,
   "yaw": -122.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.46
  }
 ],
 "id": "overlay_4190C09B_4FC9_9F5F_41C8_2308EB2F1C04",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_5E9EF18F_5370_A650_41CE_2BC26FF603BC); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_1_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ]
   },
   "pitch": 3.14,
   "yaw": -40.07,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.41,
   "yaw": -40.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.14
  }
 ],
 "id": "overlay_4190D09B_4FC9_9F5F_41B6_C80AD4B3078D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_5EA8C1A1_5370_A651_41BF_C9A554C9D15C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_2_0.png",
      "width": 438,
      "class": "ImageResourceLevel",
      "height": 376
     }
    ]
   },
   "pitch": 4.89,
   "yaw": 38.75,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.89,
   "yaw": 38.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.89
  }
 ],
 "id": "overlay_4190E09B_4FC9_9F5F_41C0_5CA231B362F9",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4190809B_4FC9_9F5F_41D0_5938FA7831DF",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 824.41,
  "y": 240.36,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_0.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 40
    }
   ]
  },
  "height": 40.68
 },
 "map": {
  "width": 40,
  "x": 824.41,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 240.36,
  "offsetY": 0,
  "height": 40.68,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_2A6B646A_3EF1_1962_41C4_FD41B45A4861",
 "data": {
  "label": "A"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 760.04,
  "y": 244.53,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_1.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 760.04,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 244.53,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_2A1C335A_3EF7_18A2_41C5_8BFDFA71FD07",
 "data": {
  "label": "B"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 697.04,
  "y": 260.01,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_2.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 697.04,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 260.01,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_2B7B5AE9_3EF1_096E_41C7_58416DF15D49",
 "data": {
  "label": "C"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 671.58,
  "y": 206.06,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_3.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 671.58,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 206.06,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_29F9B04C_3EF1_F8A6_41BC_3510B8DFE04B",
 "data": {
  "label": "D"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 753.57,
  "y": 290.57,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_4.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 753.57,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 290.57,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_29BE8983_3EF1_0BA2_41C4_1C71805D4965",
 "data": {
  "label": "E"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 802.74,
  "y": 416.29,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_5.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 802.74,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 416.29,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_28B42D8E_3EF3_0BA5_41AF_C62A896CD8AE",
 "data": {
  "label": "F"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 914.14,
  "y": 410.15,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_6.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 914.14,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 410.15,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_28300FF2_3EF3_0762_418E_C8B817602814",
 "data": {
  "label": "G"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 685.58,
  "y": 328.27,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_7.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 685.58,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 328.27,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_2941EEB3_3EF1_09E2_41C6_5CD64DA63BFC",
 "data": {
  "label": "H"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 711.64,
  "y": 413.72,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_8.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 711.64,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 413.72,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_26742D38_3EFF_08EE_41C4_EA7BCC4742E5",
 "data": {
  "label": "I"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 390.34,
  "y": 273.12,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_9.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 390.34,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_9_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 273.12,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_262DFBC5_3EFF_0FA6_41C3_50F6A97B310D",
 "data": {
  "label": "Q"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 605.84,
  "y": 266.37,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_10.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 605.84,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_10_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 266.37,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_26CF6034_3EF1_38E6_41A9_2CADA3D4ACAB",
 "data": {
  "label": "J"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 522.54,
  "y": 508.98,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_11.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 522.54,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_11_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 508.98,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_26D7F923_3EF1_08E2_41C4_97DC3AE9DF35",
 "data": {
  "label": "K"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 243.87,
  "y": 553.76,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_12.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 243.87,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_12_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 553.76,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_263DCCAA_3EF3_09ED_4174_527BB1EED459",
 "data": {
  "label": "L"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 232.51,
  "y": 476.66,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_13.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 232.51,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_13_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 476.66,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_24CA2A98_3EF1_09AE_41C6_8FC8ACC49A76",
 "data": {
  "label": "M"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 511.07,
  "y": 390.34,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_14.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 511.07,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_14_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 390.34,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_27E350CC_3EF1_19A6_41C0_4B072DD9EC05",
 "data": {
  "label": "N"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 499.1,
  "y": 332,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_15.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 499.1,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_15_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 332,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_24B9CE46_3EF7_08A2_41BF_F83979A9F3B9",
 "data": {
  "label": "O"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 496.09,
  "y": 271.15,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_16.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 496.09,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_16_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 271.15,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_245DB2FE_3EF0_F962_41BC_D844CEC37FAC",
 "data": {
  "label": "P"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 191.85,
  "y": 283.16,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_17.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 191.85,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_17_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 283.16,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_25716BFE_3EF1_0F63_41BA_FA99A785AAD3",
 "data": {
  "label": "R"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 276.69,
  "y": 298.97,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_18.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 276.69,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_18_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 298.97,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_25A2EEF9_3EF3_096E_41B9_EB7E3DB85937",
 "data": {
  "label": "S"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 339.19,
  "y": 183.95,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_19.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 339.19,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_19_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 183.95,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_238FF28B_3EF3_19A2_41C9_2CB943A6293D",
 "data": {
  "label": "T"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 96.25,
  "y": 259.4,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_20.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 96.25,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_20_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 259.4,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_22C80EC5_3EF1_09A6_41CB_CD16C463E155",
 "data": {
  "label": "U"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 252.21,
  "y": 153.05,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_21.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 252.21,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_21_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 153.05,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_232EBFA6_3EEF_07E3_41A3_65042B7AC827",
 "data": {
  "label": "V"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 170.28,
  "y": 158.76,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_22.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 170.28,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_22_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 158.76,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_20B6946F_3EEF_1962_41C3_2F2344657A9B",
 "data": {
  "label": "W"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 171.71,
  "y": 107.72,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_23.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 171.71,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_23_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 107.72,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_23728712_3ED1_78A2_41BC_37F9D8C5ADF1",
 "data": {
  "label": "X"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 25.08,
  "y": 222.03,
  "width": 40,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_24.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ]
  },
  "height": 40
 },
 "map": {
  "width": 40,
  "x": 25.08,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_24_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 222.03,
  "offsetY": 0,
  "height": 40,
  "offsetX": 0
 },
 "useHandCursor": true,
 "id": "overlay_21EC967E_3ED1_7962_41C1_CCE1F6AE8835",
 "data": {
  "label": "Y"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D, this.camera_5DAC22D3_5370_ABF0_41B7_F2EE40666248); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_1_HS_0_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1094
     }
    ]
   },
   "pitch": 10.56,
   "yaw": 47.14,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.44,
   "yaw": 47.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.56
  }
 ],
 "id": "overlay_407217A6_4FD7_E168_41CC_45148E86AB38",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_407207A6_4FD7_E168_41BE_CA5D8F18CCDC",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_5DC18242_5370_AAD3_41C2_4E9C4D965747); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_0_0.png",
      "width": 349,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ]
   },
   "pitch": 0.34,
   "yaw": 11.19,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.48,
   "yaw": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.34
  }
 ],
 "id": "overlay_4097FF3B_4FC9_A15F_41B2_4126521DD4D7",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_5DD1F251_5370_AAF1_41C4_317D977A6FCC); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_1_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ]
   },
   "pitch": 5.3,
   "yaw": -179.6,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.03,
   "yaw": -179.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 5.3
  }
 ],
 "id": "overlay_40978F3B_4FC9_A15F_41BB_D2EAE7F375AC",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4097AF3B_4FC9_A15F_41C4_DB2235EF38D9",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_5C28F3A1_5370_AA50_41C4_3B084090D97F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_0_0.png",
      "width": 422,
      "class": "ImageResourceLevel",
      "height": 471
     }
    ]
   },
   "pitch": 2.09,
   "yaw": -114.75,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -114.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 2.09
  }
 ],
 "id": "overlay_418839CB_4FC8_613F_41AB_E4A55ED4493C",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_5C18B390_5370_AA70_41A9_FCC3832B3131); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_1_0.png",
      "width": 451,
      "class": "ImageResourceLevel",
      "height": 304
     }
    ]
   },
   "pitch": 4,
   "yaw": -3.25,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": -3.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4
  }
 ],
 "id": "overlay_418819CB_4FC8_613F_41C2_1624C2F04E19",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_5C3A03B0_5370_A9B0_41D0_15B61E1110B0); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_2_0.png",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ]
   },
   "pitch": 1.97,
   "yaw": 108.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.42,
   "yaw": 108.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 1.97
  }
 ],
 "id": "overlay_418809CB_4FC8_613F_41A2_DFC5546318B7",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4189E9CB_4FC8_613F_4191_33231F726287",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_5D74B1F3_5370_A9B1_41CC_DD540723FE08); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_0_0.png",
      "width": 245,
      "class": "ImageResourceLevel",
      "height": 304
     }
    ]
   },
   "pitch": 2.19,
   "yaw": -8.96,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.66,
   "yaw": -8.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 2.19
  }
 ],
 "id": "overlay_4184786E_4FC8_EFF9_41CE_5C345B27EC55",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_5D048204_5370_AA57_41C2_BD49A539ACEC); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_1_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 328
     }
    ]
   },
   "pitch": 2.87,
   "yaw": 31.75,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7,
   "yaw": 31.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 2.87
  }
 ],
 "id": "overlay_4184586E_4FC8_EFF9_41C8_2A841176E5B1",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_5D6531E2_5370_A9D3_41C1_CDFE215B0FEA); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ]
   },
   "pitch": 1.7,
   "yaw": -42.29,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.42,
   "yaw": -42.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.7
  }
 ],
 "id": "overlay_4185B86E_4FC8_EFF9_41C7_B77D16C5F0EC",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4185986E_4FC8_EFF9_41D1_13CB248DEDE0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C, this.camera_5CE5C3DF_5370_A9F0_41BB_ED6882750E3C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0_HS_0_0.png",
      "width": 341,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ]
   },
   "pitch": 3.14,
   "yaw": 1.36,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 1.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.14
  }
 ],
 "id": "overlay_09858E54_06C6_DAA8_4187_EF4427796952",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "items": [
  {
   "camera": {
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.72",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.71"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.32",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.30"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.34",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.41"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.40",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.65"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.38",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.67"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.47",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.29"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.41",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.67"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_43400439_5370_AEB0_41C6_85CD75079623); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 17.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_0_0.png",
      "width": 624,
      "class": "ImageResourceLevel",
      "height": 638
     }
    ]
   },
   "pitch": 3.08,
   "yaw": -179.02,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.05,
   "yaw": -179.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.08
  }
 ],
 "id": "overlay_40F864AD_4FC8_E77B_41CB_9249DB79C971",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_43501448_5370_AED0_41CF_F298754E0D3A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_1_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 310
     }
    ]
   },
   "pitch": 2.35,
   "yaw": 3.44,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 3.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 2.35
  }
 ],
 "id": "overlay_40F844AD_4FC8_E77B_41C9_9EDDD377188D",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_40F994AD_4FC8_E77B_4160_AF92260D4A2F",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_5CCA03C1_5370_A9D0_41D4_06F1AF1A9413); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_0_0.png",
      "width": 357,
      "class": "ImageResourceLevel",
      "height": 368
     }
    ]
   },
   "pitch": -0.39,
   "yaw": -13.88,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.56,
   "yaw": -13.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.39
  }
 ],
 "id": "overlay_4114130F_4FC8_A136_4167_50901FC0E646",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_5CD5F3D0_5370_A9F0_41C1_4315B12C215E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_1_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 479
     }
    ]
   },
   "pitch": 2.42,
   "yaw": 180,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 2.42
  }
 ],
 "id": "overlay_41142310_4FC8_A129_41C6_EA42B22E9D9A",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_41143310_4FC8_A129_41D3_75C83326E6B5",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_5D5521D1_5370_A9F1_41C4_A233EBA1CC0B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_0_0.png",
      "width": 480,
      "class": "ImageResourceLevel",
      "height": 508
     }
    ]
   },
   "pitch": -0.16,
   "yaw": 24.42,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.98,
   "yaw": 24.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.16
  }
 ],
 "id": "overlay_415C91E9_4FCF_A0FB_41C7_AA957E42797E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_1_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 494
     }
    ]
   },
   "pitch": 2.81,
   "yaw": 125.55,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.13,
   "yaw": 125.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 2.81
  }
 ],
 "id": "overlay_415CB1E9_4FCF_A0FB_4161_5347794EA51E",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_415CC1E9_4FCF_A0FB_41D3_44FC435F4DFE",
 "angle": 0,
 "inertia": false
},
{
 "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList, this.htmltext_42860F32_5370_BAB3_41D3_38ED3BE7BDDF, this.albumitem_4281CF2F_5370_BA51_41C4_C0A7EB6741AD); this.loopAlbum(this.playList_42831F2C_5370_BA57_41B8_A11DF5171602, 0)",
 "player": "this.viewer_uid42804F2E_5370_BA53_41C8_EF2F5D2CBFF1PhotoAlbumPlayer",
 "id": "albumitem_4281CF2F_5370_BA51_41C4_C0A7EB6741AD"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2, this.camera_5DA282B9_5370_ABB1_41CC_5328030D8CDA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_0_0.png",
      "width": 688,
      "class": "ImageResourceLevel",
      "height": 775
     }
    ]
   },
   "pitch": 3.95,
   "yaw": -3.71,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.63,
   "yaw": -3.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 3.95
  }
 ],
 "id": "overlay_410BDA29_4FC8_637B_41C1_F8B2ADE7F80D",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_5D8D429A_5370_AA70_41D4_965718764967); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_1_0.png",
      "width": 441,
      "class": "ImageResourceLevel",
      "height": 478
     }
    ]
   },
   "pitch": 4.29,
   "yaw": -179.76,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -179.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 4.29
  }
 ],
 "id": "overlay_410BAA29_4FC8_637B_41D1_29C321776BE2",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_410BBA29_4FC8_637B_41B0_CE8C58B79BAC",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_5EC68126_5370_A653_41C6_24DACBBFFC79); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 20.22,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_0_0.png",
      "width": 740,
      "class": "ImageResourceLevel",
      "height": 752
     }
    ]
   },
   "pitch": 2.36,
   "yaw": -170.59,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.22,
   "yaw": -170.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.36
  }
 ],
 "id": "overlay_407E7E1D_4FD8_635B_41C0_FEDCC4DA5519",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C, this.camera_5ED12139_5370_A6B1_41D3_6E79C8DD0B5D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_1_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 559
     }
    ]
   },
   "pitch": 13.93,
   "yaw": -1.79,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.66,
   "yaw": -1.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 13.93
  }
 ],
 "id": "overlay_407E6E1D_4FD8_635B_41B0_1B166296BF15",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_407E5E1D_4FD8_635B_41CA_578B457364DC",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_4303A478_5370_AEBF_41C0_C940771ADFEE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_0_0.png",
      "width": 355,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ]
   },
   "pitch": 1.78,
   "yaw": -2.1,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": -2.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.78
  }
 ],
 "id": "overlay_41725950_4FC8_E129_41D0_A363A1814D7A",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F, this.camera_4373E468_5370_AEDF_41C8_659EA90DE606); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_1_0.png",
      "width": 329,
      "class": "ImageResourceLevel",
      "height": 276
     }
    ]
   },
   "pitch": 2.5,
   "yaw": -104.17,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.94,
   "yaw": -104.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.5
  }
 ],
 "id": "overlay_4173B950_4FC8_E129_41B4_A6DE57466C4C",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A, this.camera_43607458_5370_AEFF_41D3_A5A0EAACA273); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_2_0.png",
      "width": 341,
      "class": "ImageResourceLevel",
      "height": 374
     }
    ]
   },
   "pitch": 4.86,
   "yaw": 96.68,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.24,
   "yaw": 96.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 4.86
  }
 ],
 "id": "overlay_41738950_4FC8_E129_41CC_1109888046B1",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4173E950_4FC8_E129_41D0_2A2EE8120A85",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_5EE3914D_5370_A6D1_41BD_6AB18FECAC9A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_0_0.png",
      "width": 347,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ]
   },
   "pitch": 2.84,
   "yaw": -79.42,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -79.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 2.84
  }
 ],
 "id": "overlay_405FC15E_4FC8_61D9_41D1_AD7AA3ABAF45",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315, this.camera_5EFD216E_5370_A6D3_41C6_4838E98BEAF6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_1_0.png",
      "width": 397,
      "class": "ImageResourceLevel",
      "height": 486
     }
    ]
   },
   "pitch": 3.47,
   "yaw": -40.52,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.81,
   "yaw": -40.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 3.47
  }
 ],
 "id": "overlay_405FB15F_4FC8_61D8_41C7_AF53FD59C8B8",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_5EF2F15D_5370_A6F1_41AD_9C3B8C31567A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_2_0.png",
      "width": 389,
      "class": "ImageResourceLevel",
      "height": 321
     }
    ]
   },
   "pitch": 2.7,
   "yaw": 67.53,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.61,
   "yaw": 67.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.7
  }
 ],
 "id": "overlay_405F915F_4FC8_61D8_41C3_A8BDCFFE681E",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_405F715F_4FC8_61D8_415D_75AB649D3705",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A, this.camera_5C69333C_5370_AAB0_41C0_AAF54F08F762); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_0_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ]
   },
   "pitch": 3.33,
   "yaw": 84.64,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 84.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 3.33
  }
 ],
 "id": "overlay_416C0FD6_4FCF_A128_41CE_DE01AB8CF5E9",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259, this.camera_5C093376_5370_AAB0_41C9_4B73A6831829); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_1_0.png",
      "width": 326,
      "class": "ImageResourceLevel",
      "height": 412
     }
    ]
   },
   "pitch": 11.31,
   "yaw": 137.91,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.74,
   "yaw": 137.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 11.31
  }
 ],
 "id": "overlay_416C2FD6_4FCF_A128_41BA_893C4C516613",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2, this.camera_5C5F9322_5370_AA53_41BE_1C32B1B3DD18); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_2_0.png",
      "width": 370,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ]
   },
   "pitch": 1.81,
   "yaw": 15.52,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.09,
   "yaw": 15.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 1.81
  }
 ],
 "id": "overlay_416CFFD6_4FCF_A128_41C8_1E0DF759EE2E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E, this.camera_5C795356_5370_AAF0_41AE_5685A8E069B9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_3_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 508
     }
    ]
   },
   "pitch": 0.97,
   "yaw": -85.86,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.06,
   "yaw": -85.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 0.97
  }
 ],
 "id": "overlay_416C9FD6_4FCF_A128_418E_352F3A876F6F",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_416CAFD6_4FCF_A128_41D0_921E121B19C4",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_5DE32261_5370_AAD1_41C3_025A92D040CF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_0_0.png",
      "width": 574,
      "class": "ImageResourceLevel",
      "height": 478
     }
    ]
   },
   "pitch": 4.68,
   "yaw": -108.43,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.47,
   "yaw": -108.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 4.68
  }
 ],
 "id": "overlay_40C1444C_4FCB_A738_4199_3EF68EFC8C23",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0, this.camera_5DF32273_5370_AAB1_41CE_907FDCBD4F03); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_1_0.png",
      "width": 394,
      "class": "ImageResourceLevel",
      "height": 476
     }
    ]
   },
   "pitch": 6.46,
   "yaw": 86.98,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.6,
   "yaw": 86.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 6.46
  }
 ],
 "id": "overlay_40C1744C_4FCB_A738_41CA_426B1FF2DA01",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2, this.camera_5DFD428B_5370_AA51_41B0_4035C62DE3BC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_2_0.png",
      "width": 578,
      "class": "ImageResourceLevel",
      "height": 636
     }
    ]
   },
   "pitch": 10.76,
   "yaw": -179.25,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.37,
   "yaw": -179.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 10.76
  }
 ],
 "id": "overlay_40C1144C_4FCB_A738_41BB_C5CC13E78653",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_40C1D44C_4FCB_A738_41BE_99794C08F6BF",
 "angle": 0,
 "inertia": false
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "borderSize": 0,
 "minHeight": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#9BC1BB"
 ],
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#000066",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "click": "this.setMediaBehaviour(this.playList_428B5F39_5370_BAB1_41C6_1F2BFE57EA0C, 0)",
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0, this.camera_5C8733FD_5370_A9B0_41BF_760848423129); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_0_0.png",
      "width": 510,
      "class": "ImageResourceLevel",
      "height": 656
     }
    ]
   },
   "pitch": 3.16,
   "yaw": -132.98,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.01,
   "yaw": -132.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 3.16
  }
 ],
 "id": "overlay_1575EF7B_07DA_F958_417A_10159269154E",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315, this.camera_5CA1441A_5370_AE70_41C2_EBE2B312AB98); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_1_0.png",
      "width": 407,
      "class": "ImageResourceLevel",
      "height": 490
     }
    ]
   },
   "pitch": -0.34,
   "yaw": 38.43,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.21,
   "yaw": 38.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -0.34
  }
 ],
 "id": "overlay_1569D0A2_07D9_C7E8_418D_F6A87A767BBA",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_5CB6A42A_5370_AE50_41C0_64C327D00489); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_2_0.png",
      "width": 416,
      "class": "ImageResourceLevel",
      "height": 379
     }
    ]
   },
   "pitch": 0.56,
   "yaw": 86.06,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.45,
   "yaw": 86.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.56
  }
 ],
 "id": "overlay_15797AE0_07C6_FB68_4191_0A425FDD5056",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F, this.camera_5C97640B_5370_AE50_41A4_874CFFA08868); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_3_0.png",
      "width": 406,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": 0.5,
   "yaw": 149.78,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.16,
   "yaw": 149.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 0.5
  }
 ],
 "id": "overlay_169BCCE6_07C9_FF68_4165_ED728F142633",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C, this.camera_5CF5D3EE_5370_A9D0_41CE_569CC1C5952E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_4_0.png",
      "width": 456,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": 2.28,
   "yaw": -27.28,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.54,
   "yaw": -27.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.28
  }
 ],
 "id": "overlay_15E0862A_07C9_4AF8_4161_D8539EDF9E0C",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728_tcap0",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_5E0F20E6_5370_A7D3_41D1_90B27F412061); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_1_HS_0_0.png",
      "width": 460,
      "class": "ImageResourceLevel",
      "height": 501
     }
    ]
   },
   "pitch": 2.67,
   "yaw": 79.4,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.6,
   "yaw": 79.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 2.67
  }
 ],
 "id": "overlay_4080DECE_4FC8_6338_41CD_7F7B3CE0BC96",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_4080CECE_4FC8_6338_41D2_5A54411F615F",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0, this.camera_5D161214_5370_AA77_41C2_1193C28BE577); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_0_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ]
   },
   "pitch": 2.33,
   "yaw": -108.81,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.25,
   "yaw": -108.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 2.33
  }
 ],
 "id": "overlay_411D7F1E_4FC9_E159_41D0_9F0063E695C1",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_1_0.png",
      "width": 273,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ]
   },
   "pitch": 5.13,
   "yaw": -173.8,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.3,
   "yaw": -173.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": 5.13
  }
 ],
 "id": "overlay_411D6F1E_4FC9_E159_41BE_6CB5B3128BC0",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_411D5F1F_4FC9_E157_41AA_578F1A402C19",
 "angle": 0,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_5E568099_5370_A671_41CA_DB820C1F66B0); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_0_0.png",
      "width": 587,
      "class": "ImageResourceLevel",
      "height": 533
     }
    ]
   },
   "pitch": 6.95,
   "yaw": -103.89,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.72,
   "yaw": -103.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.95
  }
 ],
 "id": "overlay_40CEC2CE_4FCB_A339_41B0_72A5B3195890",
 "data": {
  "label": "Image"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC, this.camera_5E5D50A8_5370_A65F_41C7_CC8E3C156375); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 28.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_1_0.png",
      "width": 1051,
      "class": "ImageResourceLevel",
      "height": 603
     }
    ]
   },
   "pitch": 6.33,
   "yaw": 154.88,
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.16,
   "yaw": 154.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.33
  }
 ],
 "id": "overlay_40CEF2CF_4FCB_A337_41B6_17009B06203D",
 "data": {
  "label": "Image"
 }
},
{
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ]
 },
 "rotate": false,
 "id": "panorama_40CF02CF_4FCB_A337_41C8_65B02C1C4EAC",
 "angle": 0,
 "inertia": false
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "container_42813F30_5370_BA4F_41C2_6055FD7BCADE",
 "children": [
  "this.viewer_uid42804F2E_5370_BA53_41C8_EF2F5D2CBFF1",
  {
   "layout": "vertical",
   "borderRadius": 0,
   "scrollBarWidth": 7,
   "left": 0,
   "children": [
    "this.htmltext_42860F32_5370_BAB3_41D3_38ED3BE7BDDF"
   ],
   "paddingBottom": 0,
   "right": 0,
   "propagateClick": false,
   "backgroundColorRatios": [],
   "overflow": "scroll",
   "borderSize": 0,
   "minHeight": 20,
   "paddingRight": 0,
   "minWidth": 20,
   "verticalAlign": "bottom",
   "backgroundColor": [],
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "horizontalAlign": "left",
   "bottom": 0,
   "class": "Container",
   "gap": 10,
   "scrollBarMargin": 2,
   "scrollBarOpacity": 0.5,
   "shadow": false,
   "paddingTop": 0,
   "data": {
    "name": "Container1667"
   },
   "height": "30%",
   "contentOpaque": true,
   "backgroundOpacity": 0.3
  },
  "this.component_42859F35_5370_BAB1_41C9_6BEF0109C3F9",
  "this.component_4285FF35_5370_BAB1_41B0_A3764E540AB4"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 20,
 "paddingRight": 0,
 "minWidth": 20,
 "backgroundColor": [],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container1666"
 },
 "height": "100%",
 "contentOpaque": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
 "width": 40,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 35,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "maxWidth": 60,
 "iconURL": "skin/IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB.png",
 "maxHeight": 60
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F",
 "width": 35,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 33,
 "paddingLeft": 0,
 "mode": "toggle",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "maxWidth": 60,
 "iconURL": "skin/IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F.png",
 "maxHeight": 60
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_30F8EAD0_3EB7_09BE_41B3_C176DF519668",
  "this.IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA",
 "left": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "visible",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.Container_30F8AAD0_3EB7_09BE_41C4_644795129E2C",
  "this.IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870",
 "width": 43,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": "0%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": 43.85,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton40564"
 },
 "maxWidth": 512,
 "iconURL": "skin/IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870.png",
 "maxHeight": 512
},
{
 "itemVerticalAlign": "middle",
 "borderRadius": 5,
 "id": "ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A",
 "itemLabelFontColor": "#FFFFFF",
 "selectedItemLabelFontWeight": "bold",
 "width": 131,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "right": "0%",
 "itemThumbnailShadowHorizontalLength": 3,
 "playList": "this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist",
 "itemLabelGap": 9,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minHeight": 20,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadowVerticalLength": 3,
 "paddingRight": 20,
 "itemPaddingBottom": 3,
 "itemThumbnailShadowColor": "#000000",
 "minWidth": 20,
 "selectedItemLabelFontColor": "#5AA59A",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 20,
 "itemThumbnailHeight": 75,
 "itemLabelFontStyle": "normal",
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "gap": 10,
 "height": "100%",
 "itemThumbnailWidth": 75,
 "shadow": false,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0.24,
 "itemThumbnailShadowOpacity": 0.54,
 "itemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "layout": "vertical",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "propagateClick": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "top": "0%",
 "backgroundColorDirection": "vertical",
 "rollOverItemLabelFontWeight": "normal",
 "rollOverItemBackgroundOpacity": 0,
 "horizontalAlign": "left",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "class": "ThumbnailList",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "data": {
  "name": "hotspot kanan"
 },
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7",
 "left": "5.29%",
 "width": 52,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0.13%",
 "minWidth": 1,
 "height": 55,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton50872"
 },
 "maxWidth": 512,
 "iconURL": "skin/IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7.png",
 "maxHeight": 512
},
{
 "viewerArea": "this.viewer_uid42804F2E_5370_BA53_41C8_EF2F5D2CBFF1",
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid42804F2E_5370_BA53_41C8_EF2F5D2CBFF1PhotoAlbumPlayer"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "viewer_uid42804F2E_5370_BA53_41C8_EF2F5D2CBFF1",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "borderSize": 0,
 "minHeight": 50,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 0,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#9BC1BB"
 ],
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#000066",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea1665"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "id": "htmltext_42860F32_5370_BAB3_41D3_38ED3BE7BDDF",
 "width": "100%",
 "paddingBottom": 5,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "class": "HTMLText",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "",
 "paddingTop": 5,
 "data": {
  "name": "HTMLText1668"
 },
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "component_42859F35_5370_BAB1_41C9_6BEF0109C3F9",
 "left": 10,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "45%",
 "minWidth": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList, -1)",
 "horizontalAlign": "center",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "class": "IconButton",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton1669"
 },
 "visible": false,
 "iconURL": "skin/album_left.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "component_4285FF35_5370_BAB1_41B0_A3764E540AB4",
 "backgroundOpacity": 0,
 "right": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "45%",
 "minWidth": 0,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList, 1)",
 "horizontalAlign": "center",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "class": "IconButton",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton1670"
 },
 "visible": false,
 "iconURL": "skin/album_right.png"
},
{
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "id": "Container_30F8EAD0_3EB7_09BE_41B3_C176DF519668",
 "left": "0%",
 "width": 30,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container blue"
 },
 "height": "100%",
 "contentOpaque": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0",
 "left": 4,
 "width": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0_rollover.png",
 "paddingRight": 0,
 "top": "40%",
 "minWidth": 1,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA, true, 0, this.effect_4F69C86C_5705_6B41_41BC_5E5273634FBF, 'showEffect', false); this.setComponentVisibility(this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80, false, 0, this.effect_25FE7E90_3014_D1B3_41A1_6EBC34409425, 'hideEffect', false)",
 "horizontalAlign": "center",
 "bottom": "40%",
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "maxWidth": 80,
 "iconURL": "skin/IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0.png",
 "backgroundOpacity": 0,
 "maxHeight": 80
},
{
 "backgroundOpacity": 0.65,
 "borderRadius": 0,
 "id": "Container_30F8AAD0_3EB7_09BE_41C4_644795129E2C",
 "left": "0%",
 "width": 305,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 40,
 "top": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "children": [
  "this.Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59",
  "this.Container_30F86AD0_3EB7_09BE_41BA_9BCE7379F9A2",
  "this.Container_33886AEE_3EB7_0962_41CC_F28E6F0C55A8",
  "this.Container_2D480B3C_3EF1_08E6_41C9_50EA28CBD07A",
  "this.IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 40,
 "data": {
  "name": "Buttons set"
 },
 "height": "100%",
 "contentOpaque": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B",
 "left": 280,
 "width": 40,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B_rollover.png",
 "paddingRight": 0,
 "top": "40%",
 "minWidth": 1,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80, true, 0, this.effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB, 'showEffect', false)",
 "horizontalAlign": "center",
 "bottom": "40%",
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "maxWidth": 40,
 "iconURL": "skin/IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B.png",
 "backgroundOpacity": 0,
 "maxHeight": 40
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "top",
 "minHeight": 30,
 "url": "skin/Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59.png",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 40,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "height": "16.183%",
 "class": "Image",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 1095,
 "maxHeight": 1095
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_30F86AD0_3EB7_09BE_41BA_9BCE7379F9A2",
 "left": "0%",
 "children": [
  "this.Container_30F80AD0_3EB7_09BE_41C1_9F8214CC3665",
  "this.Button_30F83AD0_3EB7_09BE_418D_94110FD97CB3",
  "this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD",
  "this.Container_30FECAD1_3EB7_09BE_41C5_D186DB329D8B",
  "this.Button_30FEFAD1_3EB7_09BE_41B0_259DFF6D7A82",
  "this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041",
  "this.Container_338F4AED_3EB7_0966_41A0_2A6D758D5EE3",
  "this.Button_338F7AED_3EB7_0966_41C9_A75DDE898405",
  "this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC",
  "this.Container_338EBAED_3EB7_0966_41C8_94E1A35A3138",
  "this.Button_338EAAED_3EB7_0966_41C3_EF1F96C46D55",
  "this.Container_338E5AED_3EB7_0966_41C1_1BB5C35EF8D9",
  "this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3",
  "this.Button_338EDAED_3EB7_0966_419B_16B136484FB4",
  "this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E",
  "this.Container_338F9AEE_3EB7_0962_41C0_6B6DE66B3D23"
 ],
 "scrollBarWidth": 6,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "width": "94.545%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "14.4%",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "46.46%",
 "scrollBarOpacity": 0.15,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "contentOpaque": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_33886AEE_3EB7_0962_41CC_F28E6F0C55A8",
 "left": "0%",
 "children": [
  "this.Container_33881AEE_3EB7_0962_41B4_AC7F8B0BC056",
  "this.HTMLText_33880AEE_3EB7_0962_41C0_0DB7AE6F2C5B",
  "this.Container_33883AEE_3EB7_0962_41B7_1E650037D299",
  "this.Container_338F9AEF_3EB7_0962_41B3_3F638EB7294C"
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 96.05,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "8.24%",
 "class": "Container",
 "gap": 5,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "contentOpaque": false,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2D480B3C_3EF1_08E6_41C9_50EA28CBD07A",
 "left": "0%",
 "children": [
  "this.Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "bottom": "24.27%",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container19379"
 },
 "height": "21.527%",
 "contentOpaque": false,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797",
 "left": "0.27%",
 "width": 219.4,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 45.6,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.openLink('https://virtualreality.digidaxa.com/', '_blank')",
 "horizontalAlign": "center",
 "bottom": "0%",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton53855"
 },
 "maxWidth": 1811,
 "iconURL": "skin/IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797.png",
 "backgroundOpacity": 0,
 "maxHeight": 662
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_30F80AD0_3EB7_09BE_41C1_9F8214CC3665",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30F83AD0_3EB7_09BE_418D_94110FD97CB3",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 50,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "fontSize": 18,
 "label": "Contact",
 "horizontalAlign": "left",
 "fontColor": "#3B4976",
 "click": "this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); if(!this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD.get('visible')){ this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, true, 0, this.effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B, 'hideEffect', false) }",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button 1 - Reception"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD",
 "children": [
  "this.Container_30FFDAD0_3EB7_09BE_41B8_C72E22EBAF6F",
  "this.Container_30FFFAD0_3EB7_09BE_41CE_D9C2FEE1B0FA",
  "this.Button_30FF9AD0_3EB7_09BE_4177_32220F94016A",
  "this.Button_30FF8AD1_3EB7_09BE_41B5_8D111E84228C"
 ],
 "scrollBarWidth": 7,
 "layout": "vertical",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 87,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 10,
 "scrollBarOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1-1"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_30FECAD1_3EB7_09BE_41C5_D186DB329D8B",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FEFAD1_3EB7_09BE_41B0_259DFF6D7A82",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 50,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "fontSize": 18,
 "label": "Rooms",
 "horizontalAlign": "left",
 "fontColor": "#3B4976",
 "click": "if(!this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041.get('visible')){ this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, true, 0, this.effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_5B21667B_4F08_3100_41C7_3B45A9C1819F, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false)",
 "class": "Button",
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041",
 "children": [
  "this.Container_30FEAAD1_3EB7_09BE_41CB_C90197562098",
  "this.Container_30FE5AD1_3EB7_09BE_41BB_E0AC4DE2DF4F",
  "this.Button_30FE7AD1_3EB7_09BE_41B6_82F109BD5905",
  "this.Button_30FE6AD1_3EB7_09BE_41C7_67B8C8BBFAFC",
  "this.Button_30FE3AD1_3EB7_09BE_418A_6A27C26E0049",
  "this.Button_30FE2AD1_3EB7_09BE_41C0_36E52E623A3C",
  "this.Button_30FDFAD1_3EB7_095B_41C2_93D1ABE93726",
  "this.Button_338F8AEC_3EB7_0966_41CD_9668DB9F4257"
 ],
 "scrollBarWidth": 7,
 "layout": "vertical",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 200,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 10,
 "scrollBarOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_338F4AED_3EB7_0966_41A0_2A6D758D5EE3",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338F7AED_3EB7_0966_41C9_A75DDE898405",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 50,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "fontSize": 18,
 "label": "Resto & Bar",
 "horizontalAlign": "left",
 "fontColor": "#3B4976",
 "click": "if(!this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041.get('visible')){ this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, true, 0, this.effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295, 'hideEffect', false) }; if(!this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC.get('visible')){ this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, true, 0, this.effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false)",
 "class": "Button",
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338F6AED_3EB7_0966_41C5_BC920E894FFC",
 "children": [
  "this.Container_338F1AED_3EB7_0966_41C0_3638499E10A0",
  "this.Container_338F0AED_3EB7_0966_41B1_E81D589961A1",
  "this.Button_338F3AED_3EB7_0966_41C1_9388973A644F"
 ],
 "scrollBarWidth": 7,
 "layout": "vertical",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 52,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 10,
 "scrollBarOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 3-1"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_338EBAED_3EB7_0966_41C8_94E1A35A3138",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338EAAED_3EB7_0966_41C3_EF1F96C46D55",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 50,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "fontSize": 18,
 "label": "Relax Spa",
 "horizontalAlign": "left",
 "fontColor": "#3B4976",
 "click": "if(!this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3.get('visible')){ this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, true, 0, this.effect_580F8760_4F08_3F00_41AC_F78771BB3ADF, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_580FF761_4F08_3F00_4191_91ACF9401F9E, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_338E5AED_3EB7_0966_41C1_1BB5C35EF8D9",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338F9AED_3EB7_0966_41A5_ACF558B523C3",
 "children": [
  "this.Container_338F8AED_3EB7_0966_41BE_8775663E4B1C",
  "this.Container_338FBAED_3EB7_0966_4184_42D191A6B49A",
  "this.Button_338FAAED_3EB7_0966_41A4_A519F069AA4B"
 ],
 "scrollBarWidth": 7,
 "layout": "vertical",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 50,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 10,
 "scrollBarOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 4-1"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338EDAED_3EB7_0966_419B_16B136484FB4",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 43,
 "paddingLeft": 10,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "fontSize": 18,
 "label": "Meeting Room",
 "horizontalAlign": "left",
 "fontColor": "#3B4976",
 "click": "if(!this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E.get('visible')){ this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, true, 0, this.effect_59CA1A81_4F08_D101_41D2_30683CB5E100, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_59CA3A81_4F08_D101_41D3_0462DF8FB066, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E",
 "children": [
  "this.Container_338EFAED_3EB7_0966_41CE_9FF85675325B",
  "this.Container_338EEAED_3EB7_0961_41CA_CFA6387DF184",
  "this.Button_338E9AEE_3EB7_0962_419F_32ED3904E5E4"
 ],
 "scrollBarWidth": 7,
 "layout": "vertical",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 50,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 10,
 "scrollBarOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 5-1"
 },
 "contentOpaque": false,
 "visible": false
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "id": "Container_338F9AEE_3EB7_0962_41C0_6B6DE66B3D23",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "id": "Container_33881AEE_3EB7_0962_41B4_AC7F8B0BC056",
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 2,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_33880AEE_3EB7_0962_41C0_0DB7AE6F2C5B",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 78,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_33883AEE_3EB7_0962_41B7_1E650037D299",
 "children": [
  "this.IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C",
  "this.IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1",
  "this.IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48"
 ],
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 39,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 7,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338F9AEF_3EB7_0962_41B3_3F638EB7294C",
 "children": [
  "this.IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215",
  "this.Container_318CA561_3EB1_3B61_41C7_8687931CCCD5"
 ],
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 44,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 7,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minHeight": 1,
 "url": "skin/Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9.jpeg",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": "100%",
 "class": "Image",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image41414"
 },
 "scaleMode": "fit_inside",
 "maxWidth": 1024,
 "maxHeight": 682
},
{
 "backgroundOpacity": 0.5,
 "borderRadius": 0,
 "id": "Container_30FFDAD0_3EB7_09BE_41B8_C72E22EBAF6F",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30FFFAD0_3EB7_09BE_41CE_D9C2FEE1B0FA",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 8,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FF9AD0_3EB7_09BE_4177_32220F94016A",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "(+62)291 7701 999",
 "horizontalAlign": "left",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FF8AD1_3EB7_09BE_41B5_8D111E84228C",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "WA(+62)8821 5000 006",
 "horizontalAlign": "left",
 "fontColor": "#5AA59A",
 "click": "this.openLink('https://web.whatsapp.com/send?phone=6288215000006', '_blank')",
 "class": "Button",
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0.5,
 "borderRadius": 0,
 "id": "Container_30FEAAD1_3EB7_09BE_41CB_C90197562098",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_30FE5AD1_3EB7_09BE_41BB_E0AC4DE2DF4F",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 8,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FE7AD1_3EB7_09BE_41B6_82F109BD5905",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Studio Room",
 "horizontalAlign": "left",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FE6AD1_3EB7_09BE_41C7_67B8C8BBFAFC",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Suite Room - Twin Bed",
 "horizontalAlign": "left",
 "rollOverFontColor": "#5AA59A",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FE3AD1_3EB7_09BE_418A_6A27C26E0049",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Lorem Ipsum",
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Suite Room - King Bad",
 "horizontalAlign": "left",
 "rollOverFontColor": "#5AA59A",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FE2AD1_3EB7_09BE_41C0_36E52E623A3C",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Premium Suite Room - Twin Bed",
 "horizontalAlign": "left",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_30FDFAD1_3EB7_095B_41C2_93D1ABE93726",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Premium Suite Room - King Bed",
 "horizontalAlign": "left",
 "rollOverFontColor": "#5AA59A",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338F8AEC_3EB7_0966_41CD_9668DB9F4257",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Villa 2 Bedrooms",
 "horizontalAlign": "left",
 "rollOverFontColor": "#5AA59A",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0.5,
 "borderRadius": 0,
 "id": "Container_338F1AED_3EB7_0966_41C0_3638499E10A0",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338F0AED_3EB7_0966_41B1_E81D589961A1",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 8,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338F3AED_3EB7_0966_41C1_9388973A644F",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Menu",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "click": "this.openLink('http://sekurovillage.com/resto-bar/', '_blank')",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0.5,
 "borderRadius": 0,
 "id": "Container_338F8AED_3EB7_0966_41BE_8775663E4B1C",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338FBAED_3EB7_0966_4184_42D191A6B49A",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 8,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338FAAED_3EB7_0966_41A4_A519F069AA4B",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "height": 36,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 15,
 "visible": false,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0.5,
 "borderRadius": 0,
 "id": "Container_338EFAED_3EB7_0966_41CE_9FF85675325B",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "height": 1,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_338EEAED_3EB7_0961_41CA_CFA6387DF184",
 "width": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 8,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "contentOpaque": false
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_338E9AEE_3EB7_0962_419F_32ED3904E5E4",
 "rollOverBackgroundOpacity": 0.3,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "layout": "horizontal",
 "width": "100%",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "height": 24,
 "paddingLeft": 20,
 "backgroundColorDirection": "vertical",
 "mode": "push",
 "fontSize": 18,
 "label": "Website",
 "horizontalAlign": "left",
 "fontColor": "#5AA59A",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C",
 "width": 33,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "height": 30,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "maxWidth": 101,
 "iconURL": "skin/IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C.png",
 "maxHeight": 101
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1",
 "width": 32,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "height": 31,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.openLink('https://g.page/sekurovillage?share', '_blank')",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Location"
 },
 "maxWidth": 101,
 "iconURL": "skin/IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1.png",
 "maxHeight": 101
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48",
 "width": 34,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "height": 33,
 "paddingLeft": 0,
 "mode": "push",
 "click": "this.showPopupMedia(this.window_16B0FE91_3EF3_09BE_41CD_05098004CBAF, this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07, this.playList_42831F2C_5370_BA57_41B8_A11DF5171602, '90%', '90%', true, false)",
 "horizontalAlign": "center",
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "maxWidth": 101,
 "iconURL": "skin/IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48.png",
 "maxHeight": 101
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215",
 "maxHeight": 101,
 "width": 50,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 50,
 "paddingLeft": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215_pressed.png",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215.png"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_318CA561_3EB1_3B61_41C7_8687931CCCD5",
 "children": [
  "this.IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
  "this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
  "this.IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
  "this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F"
 ],
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 16,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container settings"
 },
 "contentOpaque": false
}],
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Player465"
 },
 "height": "100%",
 "contentOpaque": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.55
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
