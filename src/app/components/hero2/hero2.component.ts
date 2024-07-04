import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero2',
  templateUrl: 'hero2.component.html',
  styleUrls: ['hero2.component.css'],
})
export class Hero2 {
  @Input()
  action2: string = 'Registre sua franquia agora'
  @Input()
  heading1: string = 'Expanda seu negócio localmente'
  @Input()
  action1: string = 'Saiba mais'
  @Input()
  image1Alt: string = 'Imagem de pessoas trabalhando juntas'
  @Input()
  content1: string =
    'Crie uma franquia virtual e alcance novos clientes em diversas cidades e países.'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1692864431050-165164becb51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
