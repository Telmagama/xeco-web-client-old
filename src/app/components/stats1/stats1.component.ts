import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stats1",
  templateUrl: "stats1.component.html",
  styleUrls: ["stats1.component.css"],
})
export class Stats1 {
  @Input()
  content1: string = "Customer Feedback";
  @Input()
  image1Alt: string = "image";
  @Input()
  email: string = "90%";
  @Input()
  stat3Description: string = "consectetur adipiscing elit,";
  @Input()
  stat3: string = "95%";
  @Input()
  image1Src: string =
    "https://images.unsplash.com/photo-1639931897192-caa5fe8a628c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  whatsapp: string = "80%";
  @Input()
  name: string = "Slogan";
  @Input()
  description: string = "about";
  @Input()
  stat2Description: string = "consectetur adipiscing.";
  @Input()
  content2: string =
    "Business improvements emphasized with numbers to increase creadibility";
  @Input()
  stat4: string = "100%";
  @Input()
  stat4Description: string = "consectetur adipiscing.";
  constructor() {}
  zoom = 12;
  center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: "hybrid",
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 15,
  //   minZoom: 8,
  // };

  options: google.maps.MapOptions = {
    mapId: "d4546980d7049e40",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
}
