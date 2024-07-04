import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features23',
  templateUrl: 'features23.component.html',
  styleUrls: ['features23.component.css'],
})
export class Features23 {
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  feature4ImageSrc: string =
    'https://images.unsplash.com/photo-1617817546276-80b86dd60151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature5Description: string =
    'Explore seções como FAQ, blog, parceiros e oportunidades de carreira em nossa plataforma.'
  @Input()
  feature2ImageSrc: string =
    'https://images.unsplash.com/photo-1669061585723-c5cc2b2e5ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature5ImageAlt: string = 'Imagem ilustrativa para Seções Adicionais'
  @Input()
  feature1ImageAlt: string =
    'Imagem ilustrativa para Criação de Franquia Virtual'
  @Input()
  feature4ImageAlt: string = 'Imagem ilustrativa para Marketplace e Entregas'
  @Input()
  feature1Description: string =
    'Expanda seu negócio localmente criando uma franquia virtual na nossa plataforma.'
  @Input()
  feature2Title: string = 'Guias Locais'
  @Input()
  feature6Description: string =
    'Conte com nosso suporte personalizado para auxiliar em suas necessidades na plataforma.'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1613506006950-dc8adda86b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature6ImageAlt: string = 'Imagem ilustrativa para Suporte Personalizado'
  @Input()
  feature3Description: string =
    'Descubra tours disponíveis em diversas cidades e países para explorar novos lugares.'
  @Input()
  feature4Title: string = 'Marketplace e Entregas'
  @Input()
  feature3ImageSrc: string =
    'https://images.unsplash.com/photo-1705858741783-ba1defdc5302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature4Description: string =
    'Aproveite nossos serviços de marketplace e entregas para facilitar suas compras online.'
  @Input()
  feature3Title: string = 'Tours em Diversas Cidades e Países'
  @Input()
  heading1: string = 'Recursos'
  @Input()
  feature5ImageSrc: string =
    'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  action1: string = 'Main action'
  @Input()
  feature2Description: string =
    'Acesse guias locais para obter informações sobre comércio e pontos turísticos da região.'
  @Input()
  feature6ImageSrc: string =
    'https://images.unsplash.com/photo-1623237801985-0e168cfb0e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImageAlt: string = 'Imagem ilustrativa para Guias Locais'
  @Input()
  feature5Title: string = 'Seções Adicionais'
  @Input()
  feature1Title: string = 'Criação de Franquia Virtual'
  @Input()
  feature6Title: string = 'Suporte Personalizado'
  @Input()
  feature3ImageAlt: string =
    'Imagem ilustrativa para Tours em Diversas Cidades e Países'
  constructor() {}
}
