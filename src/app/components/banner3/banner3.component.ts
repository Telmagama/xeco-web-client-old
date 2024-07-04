import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner3',
  templateUrl: 'banner3.component.html',
  styleUrls: ['banner3.component.css'],
})
export class Banner3 {
  @Input()
  content1: string =
    'Crie uma franquia virtual e alcance novos clientes em diversas cidades e países.'
  @Input()
  action1: string = 'Saiba mais'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1577636234173-9be278aa84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjAyN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Alt: string = 'Franquia Virtual'
  @Input()
  heading1: string = 'Expanda seu negócio localmente'
  constructor() {}
}
