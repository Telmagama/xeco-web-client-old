import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
})
export class Location {
  @Input()
  background: string = '/assets/Destinations/destination-1-400h.png'
  @Input()
  location: string = 'Tokyo, Japan'
  constructor() {}
}
