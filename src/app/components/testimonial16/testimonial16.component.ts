import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial16',
  templateUrl: 'testimonial16.component.html',
  styleUrls: ['testimonial16.component.css'],
})
export class Testimonial16 {
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1580626831795-21588458f224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Name: string = 'Maria Silva'
  @Input()
  author3Position: string = 'Cliente satisfeito'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  author2Name: string = 'João Santos'
  @Input()
  author1Position: string = 'Proprietária de loja'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author4Name: string = 'Ana Costa'
  @Input()
  author1Alt: string = 'image'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1620553967189-8c0eddd81c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Pedro Oliveira'
  @Input()
  review2: string = 'Encontrei ótimas dicas locais para turistas. Muito útil!'
  @Input()
  author2Position: string = 'Viajante'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  @Input()
  author4Position: string = 'Exploradora urbana'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author4Alt: string = 'image'
  @Input()
  author3Alt: string = 'image'
  @Input()
  author2Alt: string = 'image'
  @Input()
  review1: string =
    'Excelente plataforma para expandir meu negócio localmente. Recomendo!'
  @Input()
  review4: string =
    'O guia local me ajudou a descobrir lugares incríveis na minha cidade!'
  @Input()
  review3: string =
    'A entrega foi rápida e o atendimento excelente. Comprarei novamente!'
  constructor() {}
}
