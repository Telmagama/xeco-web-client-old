import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.component.html',
  styleUrls: ['guide.component.css'],
})
export class Guide {
  @Input()
  name: string = 'Miura Avaron'
  @Input()
  rootClassName: string = ''
  @Input()
  portrait: string = '/assets/Guides/guide-1.png'
  @Input()
  location: string = 'Tokyo, Japan'
  constructor() {}
}
