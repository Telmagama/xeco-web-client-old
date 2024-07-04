import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "src/app/home.service";
import Swal from "sweetalert2";

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
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("is mobile", navigator.userAgent);
    } else {
      console.log("not is mobile", navigator.userAgent);
      Swal.fire({
        title: "Eiiii",
        text: "Baixe nosso app no celular, é muito mais divertido e completo",
        icon: "info",
        showDenyButton: true,

        confirmButtonText: "Android",
        denyButtonText: `iOS`,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",

        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("http://android.com", "_blank").focus();
        } else {
          window.open("https://www.apple.com/br/app-store/", "_blank").focus();
        }
      });
    }
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
