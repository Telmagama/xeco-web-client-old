import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.css'],
})
export class Offer {
  @Input()
  rootClassName: string = ''
  @Input()
  image: string = 'f8ae1ece-a597-4603-a6d6-066768a42c4c'
  @Input()
  guides: string = '3 Local guides'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  @Input()
  location: string = 'Crete, Greece'
  constructor() {}
}
