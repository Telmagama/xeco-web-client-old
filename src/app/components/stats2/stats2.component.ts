import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-stats2',
  templateUrl: 'stats2.component.html',
  styleUrls: ['stats2.component.css'],
})
export class Stats2 {
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjY0NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Estatísticas'
  @Input()
  stat2Description: string =
    'Crie sua própria franquia virtual e alcance novos clientes'
  @Input()
  stat4: string = 'Centenas de produtos disponíveis no marketplace'
  @Input()
  stat3: string = 'Mais de 50 guias locais disponíveis'
  @Input()
  stat1: string = 'Mais de 100 franquias virtuais criadas'
  @Input()
  content2: string = 'Aproveite a oportunidade de crescimento'
  @Input()
  stat3Description: string =
    'Descubra os melhores lugares para visitar em cada região'
  @Input()
  stat2: string = 'Oportunidade de negócio'
  @Input()
  stat1Description: string =
    'Aproveite a chance de se tornar um franqueado virtual'
  @Input()
  stat4Description: string =
    'Explore uma variedade de produtos de diferentes fornecedores'
  @Input()
  content1: string = 'Expanda seu negócio localmente com facilidade'
  @Input()
  image1Alt: string = 'Franquias Virtuais'
  constructor() {}
}
