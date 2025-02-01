/// <reference types="@types/google.maps" />

import { CustomMap } from "./CustomMap";
import { User } from "./User";

function initMap() {
  const customMap = new CustomMap("map");
  const user = new User();

  customMap.addUserMarker(user);
  console.log("test");
}

(window as any).initMap = initMap;
