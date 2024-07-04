import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Stats1 } from './stats1/stats1.component'
import { Banner31 } from './banner31/banner31.component'
import { Team3 } from './team3/team3.component'
import { Gallery10 } from './gallery10/gallery10.component'
import { Hero2 } from './hero2/hero2.component'
import { Banner1 } from './banner1/banner1.component'
import { Team1 } from './team1/team1.component'
import { Stats2 } from './stats2/stats2.component'
import { Testimonial16 } from './testimonial16/testimonial16.component'
import { Banner3 } from './banner3/banner3.component'
import { Hero8 } from './hero8/hero8.component'
import { Features23 } from './features23/features23.component'
import { Features1 } from './features1/features1.component'
import { Team2 } from './team2/team2.component'
import { Logos1 } from './logos1/logos1.component'
import { Offer } from './offer/offer.component'
import { Location } from './location/location.component'
import { Guide } from './guide/guide.component'
import { Feature } from './feature/feature.component'
import { Contact10 } from './contact10/contact10.component'
import { Hero17 } from './hero17/hero17.component'
import { CTA26 } from './cta26/cta26.component'
import { Features24 } from './features24/features24.component'
import { Steps2 } from './steps2/steps2.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'
import { Features25 } from './features25/features25.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Banner32 } from './banner32/banner32.component'

@NgModule({
  declarations: [
    Stats1,
    Banner31,
    Team3,
    Gallery10,
    Hero2,
    Banner1,
    Team1,
    Stats2,
    Testimonial16,
    Banner3,
    Hero8,
    Features23,
    Features1,
    Team2,
    Logos1,
    Offer,
    Location,
    Guide,
    Feature,
    Contact10,
    Hero17,
    CTA26,
    Features24,
    Steps2,
    Testimonial17,
    Features25,
    Pricing14,
    Banner32,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Stats1,
    Banner31,
    Team3,
    Gallery10,
    Hero2,
    Banner1,
    Team1,
    Stats2,
    Testimonial16,
    Banner3,
    Hero8,
    Features23,
    Features1,
    Team2,
    Logos1,
    Offer,
    Location,
    Guide,
    Feature,
    Contact10,
    Hero17,
    CTA26,
    Features24,
    Steps2,
    Testimonial17,
    Features25,
    Pricing14,
    Banner32,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
