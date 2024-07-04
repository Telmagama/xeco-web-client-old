import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1564608910124-595f4636b113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1609128214338-5f6a2d15c64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location2ImageAlt: string = 'image2Alt'
  @Input()
  heading1: string = 'Locations'
  @Input()
  location2Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location1ImageAlt: string = 'image1Alt'
  @Input()
  location1: string = 'Bucharest'
  @Input()
  location2: string = 'Cluj - Napoca'
  constructor() {}
}
