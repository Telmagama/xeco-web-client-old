import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ProdutoDetalhe } from "./produto-detalhe.component";
import { ComponentsModule } from "src/app/components/components.module";

const routes = [
  {
    path: "",
    component: ProdutoDetalhe,
  },
];

@NgModule({
  declarations: [ProdutoDetalhe],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ProdutoDetalhe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProdutoDetalheModule {}
