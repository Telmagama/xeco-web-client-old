import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-team3',
  templateUrl: 'team3.component.html',
  styleUrls: ['team3.component.css'],
})
export class Team3 {
  @Input()
  member1Src: string =
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  content1: string = 'Join Our Team Today!'
  @Input()
  heading2: string = 'We’re hiring!'
  @Input()
  member4Content: string =
    'Ana cuida das finanças da empresa com precisão e eficiência.'
  @Input()
  member1Alt: string = 'Foto de João Silva, CEO da empresa'
  @Input()
  member1Content: string =
    'João é o fundador da empresa e lidera a equipe com paixão e visão.'
  @Input()
  member4Job: string = 'Diretora Financeira'
  @Input()
  heading1: string = 'Nosso Time'
  @Input()
  member4: string = 'Ana Costa'
  @Input()
  member3Src: string =
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5M3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member2Alt: string = 'Foto de Maria Santos, Diretora de Marketing'
  @Input()
  member2Src: string =
    'https://images.unsplash.com/photo-1602481182506-6e15d0d2e44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  content3: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  member1: string = 'João Silva'
  @Input()
  member3Content: string =
    'Pedro garante que todas as operações da empresa funcionem sem problemas.'
  @Input()
  member4Src: string =
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjA5NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member3: string = 'Pedro Oliveira'
  @Input()
  member4Alt: string = 'Foto de Ana Costa, Diretora Financeira'
  @Input()
  member2Content: string =
    'Maria é responsável por todas as estratégias de marketing da empresa.'
  @Input()
  member2Job: string = 'Diretora de Marketing'
  @Input()
  member3Alt: string = 'Foto de Pedro Oliveira, Diretor de Operações'
  @Input()
  member2: string = 'Maria Santos'
  @Input()
  member1Job: string = 'CEO'
  @Input()
  member3Job: string = 'Diretor de Operações'
  @Input()
  actionContent: string = 'Open positions'
  constructor() {}
}
