import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "src/app/home.service";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
})
export class Home implements OnInit {
  images: any[] | undefined;
  quantidade: any = 1;

  estados: any[] = [];
  selectedState: any;
  companiesOfACity: any;

  cidades: any;
  selectedCity: any;
  showCities: boolean = false;
  constructor(
    private title: Title,
    private meta: Meta,
    private hs: HomeService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.title.setTitle("Xeco");
    this.meta.addTags([
      {
        property: "og:title",
        content: "Xeco",
      },
    ]);
  }
  ngOnInit(): void {
    this.populaEstados();
    this.initSearch();
    this._prepareMetaShare();
  }

  populaEstados() {
    this.estados = [
      {
        code: "AC",
        nome: "Acre",
      },
      {
        code: "AL",
        nome: "Alagoas",
      },
      {
        code: "AP",
        nome: "Amapá",
      },
      {
        code: "AM",
        nome: "Amazonas",
      },
      {
        code: "BA",
        nome: "Bahia",
      },
      {
        code: "CE",
        nome: "Ceará",
      },
      {
        code: "DF",
        nome: "Distrito Federal",
      },
      {
        code: "ES",
        nome: "Espírito Santo",
      },
      {
        code: "GO",
        nome: "Goiás",
      },
      {
        code: "MA",
        nome: "Maranhão",
      },
      {
        code: "MT",
        nome: "Mato Grosso",
      },
      {
        code: "MS",
        nome: "Mato Grosso do Sul",
      },
      {
        code: "MG",
        nome: "Minas Gerais",
      },
      {
        code: "PA",
        nome: "Pará",
      },
      {
        code: "PB",
        nome: "Paraíba",
      },

      {
        code: "PE",
        nome: "Pernambuco",
      },
      {
        code: "PI",
        nome: "Piaui",
      },
      {
        code: "RJ",
        nome: "Rio de Janeiro",
      },
      {
        code: "RN",
        nome: "Rio Grande do Norte",
      },
      {
        code: "RS",
        nome: "Rio Grande do Sul",
      },
      {
        code: "RO",
        nome: "Rondônia",
      },
      {
        code: "RR",
        nome: "Roraima",
      },
      {
        code: "SC",
        nome: "Santa Catarina",
      },
      {
        code: "SP",
        nome: "São Paulo",
      },
      {
        code: "SE",
        nome: "Sergipe",
      },
      {
        code: "TO",
        nome: "Tocantins",
      },
    ];
  }

  async getAllCitiesByState(s: any) {
    let k: string = s;

    this.selectedState = k;

    this.cidades = [];
    this.hs
      .getAllCitiesByState(k)
      .then((result) => {
        result.subscribe((w) => (this.cidades = w));
        this.showCities = true;
        this.getAllCompaniesByCityAndUfet();
      })
      .catch((err) => {
        this.cidades = [];
        this.showCities = false;
        console.log("deu zessdasrba ", err);
      });
  }

  async getAllCompaniesByCityAndUfet() {
    this.hs
      .getAllCompaniesByCityAndUf(this.selectedCity, this.selectedState)
      .then((result) => {
        result.subscribe((w) => (this.companiesOfACity = w));
      })
      .catch((err) => {
        this.cidades = [];
        this.showCities = false;
        console.error(" erro ao consultar franquias ", err);
      });
  }

  initSearch() {
    let city = localStorage.getItem("city");
    let state = localStorage.getItem("uf");

    if (city && state) {
      this.selectedCity = city;
      this.hs
        .getAllCompaniesByCityAndUf(city, state)
        .then((result) => {
          result.subscribe((w) => (this.companiesOfACity = w));
        })
        .catch((err) => {
          this.cidades = [];
          this.showCities = false;
          console.error(" erro ao consultar franquias ", err);
        });
    }
  }

  _prepareMetaShare() {
    setTimeout(() => {
      this.meta.addTag({
        name: "title",
        content: `Xeco - ${this.selectedCity}`,
        property: "og:title",
      });
      this.meta.addTag({
        content: `https://firebasestorage.googleapis.com/v0/b/explorecash-a6526.appspot.com/o/assets_web%2FXeco(1).svg?alt=media&token=c0845173-511a-4ace-9c2d-a89d9a83ada2`,
        property: "og:image",
      });
    }, 900);
  }

  setCompanyinUse(e: any) {
    console.log("e ", e);
    this.productDetail(e);
  }
  productDetail(item: any) {
    console.log("item ", item._id);
    this.router.navigate(["/franquia"], { queryParams: { c: item._id } });
  }
}
