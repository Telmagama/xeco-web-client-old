import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta26',
  templateUrl: 'cta26.component.html',
  styleUrls: ['cta26.component.css'],
})
export class CTA26 {
  @Input()
  heading1: string = 'Expanda seu negócio localmente em Crete, Greece'
  @Input()
  content1: string =
    'Crie sua franquia virtual e alcance novos clientes na região'
  @Input()
  action1: string = 'Comece agora'
  constructor() {}
}
