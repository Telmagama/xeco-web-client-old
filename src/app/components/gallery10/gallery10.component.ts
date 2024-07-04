import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-gallery10',
  templateUrl: 'gallery10.component.html',
  styleUrls: ['gallery10.component.css'],
})
export class Gallery10 {
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1642354984167-a060fac63084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3Mjg5OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1609143739217-01b60dad1c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3Mjg5OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1695302373322-12c782759a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3Mjg5OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Alt: string = 'Imagem 4 - Entregas'
  @Input()
  image2Alt: string = 'Imagem 2 - Guia Comercial'
  @Input()
  image1Alt: string = 'Imagem 1 - Franquia Virtual'
  @Input()
  image3Alt: string = 'Imagem 3 - Marketplace'
  @Input()
  content1: string =
    'Expanda seu negócio localmente através de uma franquia virtual.'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1518103744022-a2121047f429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3Mjg5OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Guia Comercial'
  constructor() {}
}
