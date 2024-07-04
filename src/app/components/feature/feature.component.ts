import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css'],
})
export class Feature {
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  icon: string = '/assets/Icons/thumbs-up.svg'
  @Input()
  header: string = 'Hand Picked Guides'
  constructor() {}
}
