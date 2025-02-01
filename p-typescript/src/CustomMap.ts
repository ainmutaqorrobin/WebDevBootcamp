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
}
