import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features25',
  templateUrl: 'features25.component.html',
  styleUrls: ['features25.component.css'],
})
export class Features25 {
  @Input()
  feature3Description: string =
    'Marketplace integrado para facilitar a compra e venda de produtos relacionados ao turismo e viagens.'
  @Input()
  feature1ImgAlt: string = 'Imagem ilustrativa para Criação de Franquia Virtual'
  @Input()
  feature1Description: string =
    'Possibilidade de expandir negócios localmente através da criação de uma franquia virtual na plataforma.'
  @Input()
  feature3ImgAlt: string = 'Imagem ilustrativa para Marketplace Integrado'
  @Input()
  feature2Title: string = 'Guias Locais para Turismo'
  @Input()
  feature1Title: string = 'Criação de Franquia Virtual'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1657816863146-7bfa680436e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Acesso a guias locais que auxiliam os usuários a explorar e descobrir novos destinos turísticos.'
  @Input()
  feature3Title: string = 'Marketplace Integrado'
  @Input()
  feature2ImgAlt: string = 'Imagem ilustrativa para Guias Locais para Turismo'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1533899345698-ac4fb35f28c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1M3w&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
