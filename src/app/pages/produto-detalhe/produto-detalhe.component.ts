import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "src/app/home.service";

@Component({
  selector: "produto-detalhe",
  templateUrl: "produto-detalhe.component.html",
  styleUrls: ["produto-detalhe.component.css"],
})
export class ProdutoDetalhe implements OnInit {
  query: any;
  produto: any;

  constructor(
    private title: Title,
    private meta: Meta,
    public router: Router,
    private route: ActivatedRoute,
    private hs: HomeService
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((p) => {
      this.query = p.get("p");
    });
    this.getProductDetail();
    this._cleanMeta();
    this._prepareMeta();
  }

  getProductDetail() {
    this.hs
      .getProductDetail(this.query)
      .then((result) => {
        result.subscribe((w) => {
          this.produto = w[0];
          console.log("this.produto", this.produto);
        });
      })
      .catch((err) => {
        console.error(" erro ao consultar detalhe do produto ", err);
      });
  }

  _formatarValorEmReais(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  _prepareMeta() {
    let preco = this._formatarValorEmReais(Number(this.produto.salePrice));
    this.meta.addTag({
      name: "og:url",
      content: `https://web.xeco.com.br/marketplace?p=${this.query}`,
      property: "og:title",
    });

    this.meta.addTag({
      name: "title",
      content: `Xeco - ${this.produto.name}`,
      property: "og:title",
    });

    this.meta.addTag({
      name: "description",
      content: `Confira ${this.produto.name} \n Somente ${preco} \n Encontre no Xeco agora!`,
      property: "og:description",
    });

    this.meta.removeTag("property='og:image'");
    let image = this.produto.imagesUrl[0].stringValue;

    this.meta.addTag({
      content: `${image}`,
      property: "og:image",
    });

    this.meta.addTag({
      content: `article`,
      property: "og:type",
    });

    this.meta.addTag({
      content: `article`,
      property: "og:type",
    });

    this.meta.addTag({
      content: `summary_large_image`,
      name: "twitter:card",
    });

    this.meta.addTag({
      content: `${this.produto.name}`,
      name: "twitter:title",
    });

    this.meta.addTag({
      content: `${this.produto.name}`,
      name: "twitter:description",
    });

    this.meta.addTag({
      content: `${image}`,
      name: "twitter:image",
    });

    this.title.setTitle(`Xeco - ${this.produto.name}`);
    this.meta.addTags([
      {
        property: "og:title",
        content: `Xeco - ${this.produto.name}`,
      },
    ]);
  }

  _cleanMeta() {
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("og:title'");
    this.meta.removeTag("property='description'");
  }
}
