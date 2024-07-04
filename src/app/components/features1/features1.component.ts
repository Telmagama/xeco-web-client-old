import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature3ImageSrc: string =
    'https://images.unsplash.com/photo-1639322537523-abaea1ca9f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjY0NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImageSrc: string =
    'https://images.unsplash.com/photo-1693205801540-98bb2422ea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjY0NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  sectionTitle: string = 'Recursos'
  @Input()
  feature3Description: string =
    'Explore nosso marketplace para encontrar produtos e serviços de qualidade oferecidos por nossos parceiros.'
  @Input()
  secondaryAction: string = 'Explore nossos guias locais'
  @Input()
  feature3Title: string = 'Marketplace'
  @Input()
  feature2ImageAlt: string = 'Imagem representativa dos Guias Locais'
  @Input()
  feature2Description: string =
    'Acesse nossos guias locais exclusivos e descubra os melhores destinos turísticos em sua região.'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1601727744936-502d276c1770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjY0NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImageAlt: string = 'Imagem representativa do Marketplace'
  @Input()
  sectionDescription: string =
    'Descubra os recursos exclusivos que nossa plataforma oferece para expandir seus negócios e explorar o turismo local.'
  @Input()
  feature1Title: string = 'Franquia Virtual'
  @Input()
  feature1ImageAlt: string = 'Imagem representativa da Franquia Virtual'
  @Input()
  feature1Description: string =
    'Tenha a oportunidade de criar uma franquia virtual e expandir seus negócios localmente de forma prática e eficiente.'
  @Input()
  feature2Title: string = 'Guias Locais'
  @Input()
  slogan: string = 'Expanda seus horizontes com nossa plataforma'
  @Input()
  mainAction: string = 'Crie sua franquia virtual agora'
  constructor() {}
}
