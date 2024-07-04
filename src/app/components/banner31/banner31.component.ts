import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner31',
  templateUrl: 'banner31.component.html',
  styleUrls: ['banner31.component.css'],
})
export class Banner31 {
  @Input()
  heading1: string = 'Expanda seus negócios localmente'
  @Input()
  image1Alt: string = 'Imagem de pessoas trabalhando juntas'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1585140069954-ff20ed4bc598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjM1NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  action1: string = 'Saiba mais'
  @Input()
  content1: string =
    'Crie uma franquia virtual e alcance novos clientes na sua região.'
  constructor() {}
}
