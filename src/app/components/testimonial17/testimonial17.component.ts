import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @Input()
  author2Position: string = 'Guia Turístico'
  @Input()
  author1Position: string = 'Empresária'
  @Input()
  author3Alt: string = 'Foto do Pedro Oliveira'
  @Input()
  author1Name: string = 'Maria Silva'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1528515038361-c1c059a6eff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Pedro Oliveira'
  @Input()
  review2: string =
    'Os guias locais disponibilizados são muito úteis e facilitam o trabalho de quem atua no turismo. Recomendo!'
  @Input()
  author2Name: string = 'João Santos'
  @Input()
  author4Position: string = 'Empreendedora'
  @Input()
  author4Name: string = 'Ana Costa'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1619995576966-dd70cf319da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Foto da Maria Silva'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Foto do João Santos'
  @Input()
  author4Alt: string = 'Foto da Ana Costa'
  @Input()
  content1: string =
    'Estou muito satisfeita com a franquia virtual que criei através desta plataforma. O suporte oferecido foi excepcional e estou vendo meu negócio local crescer de forma significativa.'
  @Input()
  author3Position: string = 'Viajante'
  @Input()
  review1: string = 'Excelente plataforma para expandir negócios localmente!'
  @Input()
  heading1: string = 'Depoimentos dos nossos clientes'
  @Input()
  review3: string =
    'Encontrei ótimas opções de tours no marketplace deste site. Minha experiência de viagem foi incrível graças às informações disponíveis.'
  @Input()
  review4: string =
    'Descobri novas oportunidades de negócio ao explorar as informações sobre cidades e países disponíveis aqui. Uma ferramenta indispensável para quem deseja expandir seus horizontes.'
  constructor() {}
}
