/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(htmlId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  async addUserMarker(user: User): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  addCompanyMarker(company: Company): void {}
}
