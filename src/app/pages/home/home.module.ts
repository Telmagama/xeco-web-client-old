import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import "dangerous-html";

import { Home } from "./home.component";
import { ComponentsModule } from "src/app/components/components.module";
import { FormsModule } from "@angular/forms";

const routes = [
  {
    path: "",
    component: Home,
  },
];

@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
