import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps2',
  templateUrl: 'steps2.component.html',
  styleUrls: ['steps2.component.css'],
})
export class Steps2 {
  @Input()
  step1Description: string =
    'Sign up on our platform to start the process of creating your virtual franchise.'
  @Input()
  step3Description: string =
    'Utilize our marketing tools to reach a wider audience and attract more customers.'
  @Input()
  step2Title: string = 'Customize Your Franchise'
  @Input()
  step2Description: string =
    'Personalize your virtual franchise with your branding, products, and services.'
  @Input()
  step1Title: string = 'Create an Account'
  @Input()
  step3Title: string = 'Explore Marketing Tools'
  @Input()
  step4Description: string =
    'Grow your local business by expanding into new territories through your virtual franchise.'
  @Input()
  step4Title: string = 'Expand Your Business'
  constructor() {}
}
