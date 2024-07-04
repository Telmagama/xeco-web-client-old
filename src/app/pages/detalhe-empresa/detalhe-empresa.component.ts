import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "src/app/home.service";

@Component({
  selector: "detalhe-empresa",
  templateUrl: "detalhe-empresa.component.html",
  styleUrls: ["detalhe-empresa.component.css"],
})
export class DetalheEmpresa implements OnInit {
  franquia: any;
  query: any;
  company: any;
  constructor(
    private title: Title,
    private meta: Meta,
    public router: Router,
    private route: ActivatedRoute,
    private hs: HomeService
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((p) => {
      this.query = p.get("c");
    });
    this.getCompanyDetail();
    this._prepareMeta();
  }

  _validateRout() {
    console.log("this._px ", this.query);

    if (!this.query || this.query == "") this.router.navigate(["/"]);
  }

  getCompanyDetail() {
    this.hs
      .getCompanyDetail(this.query)
      .then((result) => {
        result.subscribe((w) => {
          this.company = w;
          console.log("this.company", this.company);
        });
      })
      .catch((err) => {
        console.error(" erro ao consultar detalhe da franquia ", err);
      });
  }

  _prepareMeta() {
    setTimeout(() => {
      this.title.setTitle(`Xeco - ${this.company.name}`);
      this.meta.addTags([
        {
          property: "og:title",
          content: `Xeco - ${this.company.name}`,
        },
        {
          content: `${this.company.logo}`,
          property: "og:image",
        },
        {
          content: `${this.company.about}`,
          property: "description",
        },
        {
          content: `xeco, guia, comercial, marketplace, negocios`,
          property: "keywords",
        },
        {
          content: `Guaracy de Araújo Lima`,
          property: "author",
        },
      ]);
    }, 900);
  }
}
