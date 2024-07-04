import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

const routes = [
  {
    path: "franquia",
    loadChildren: () =>
      import("./pages/detalhe-empresa/detalhe-empresa.module").then(
        (m) => m.DetalheEmpresaModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "marketplace",
    loadChildren: () =>
      import("./pages/produto-detalhe/produto-detalhe.module").then(
        (m) => m.ProdutoDetalheModule
      ),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./pages/not-found/not-found.module").then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    ComponentsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
