import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { DetalheEmpresa } from "./detalhe-empresa.component";
import { ComponentsModule } from "src/app/components/components.module";
import { GoogleMapsModule } from "@angular/google-maps";
const routes = [
  {
    path: "",
    component: DetalheEmpresa,
  },
];

@NgModule({
  declarations: [DetalheEmpresa],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
  ],
  exports: [DetalheEmpresa],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetalheEmpresaModule {}
