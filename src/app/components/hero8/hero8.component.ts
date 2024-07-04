import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero8',
  templateUrl: 'hero8.component.html',
  styleUrls: ['hero8.component.css'],
})
export class Hero8 {
  @Input()
  action1: string = 'Comece agora'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1600078326450-de0cdd102efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjY0NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  content1: string = 'Expanda seus negócios localmente com uma franquia virtual'
  @Input()
  action2: string = 'Saiba mais'
  @Input()
  heading1: string = 'Crie uma franquia virtual e expanda seus negócios'
  @Input()
  image1Alt: string = 'Imagem de negócios locais'
  constructor() {}
}
