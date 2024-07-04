import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "src/app/home.service";

@Component({
  selector: "app-team2",
  templateUrl: "team2.component.html",
  styleUrls: ["team2.component.css"],
})
export class Team2 implements OnInit {
  @Input()
  member1Alt: string = "Foto de João Silva, CEO e Fundador";
  @Input()
  member5Job: string = "Especialista em Experiência do Cliente";
  @Input()
  heading2: string = "We’re hiring!";
  @Input()
  member6Content: string =
    "Rafael analisa dados para fornecer insights valiosos que impulsionam nossas decisões estratégicas.";
  @Input()
  member3Job: string = "Diretor de Operações";
  @Input()
  member5Alt: string =
    "Foto de Luiza Pereira, Especialista em Experiência do Cliente";
  @Input()
  member4Content: string =
    "Ana supervisiona o desenvolvimento de novos produtos, garantindo que atendam às necessidades de nossos clientes.";
  @Input()
  content2: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  @Input()
  member5Src: string =
    "https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMHw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  content3: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  @Input()
  actionContent: string = "Open positions";
  @Input()
  member4: string = "Ana Costa";
  @Input()
  heading1: string = "Nossos produtos";
  @Input()
  member2Job: string = "Diretora de Marketing";
  @Input()
  member3Src: string =
    "https://images.unsplash.com/photo-1576515652031-fc429bab6503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMHw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  member2: string = "Maria Santos";
  @Input()
  member3: string = "Pedro Oliveira";
  @Input()
  member2Src: string =
    "https://images.unsplash.com/photo-1519733833087-3b1ceb8d56c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMXw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  member5: string = "Luiza Pereira";
  @Input()
  member1Src: string =
    "https://images.unsplash.com/photo-1549351512-c5e12b11e283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMHw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  content1: string = "Conheça a equipe por trás do nosso sucesso";
  @Input()
  member6Job: string = "Analista de Dados";
  @Input()
  member2Content: string =
    "Maria é especialista em estratégias de marketing digital, trazendo criatividade e expertise para nossas campanhas.";
  @Input()
  member2Alt: string = "Foto de Maria Santos, Diretora de Marketing";
  @Input()
  member6: string = "Rafael Santos";
  @Input()
  member3Alt: string = "Foto de Pedro Oliveira, Diretor de Operações";
  @Input()
  member4Alt: string = "Foto de Ana Costa, Gerente de Produto";
  @Input()
  member4Src: string =
    "https://images.unsplash.com/photo-1561031454-4f1331bd2a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMXw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  member5Content: string =
    "Luiza foca em proporcionar a melhor experiência para nossos clientes, buscando sempre a satisfação total.";
  @Input()
  member1Job: string = "CEO e Fundador";
  @Input()
  member6Src: string =
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk3MjIzMHw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  member1Content: string =
    "João é apaixonado por empreendedorismo e inovação, liderando nossa equipe com visão e determinação.";
  @Input()
  member6Alt: string = "Foto de Rafael Santos, Analista de Dados";
  @Input()
  member4Job: string = "Gerente de Produto";
  @Input()
  member3Content: string =
    "Pedro garante que nossos processos operacionais funcionem sem problemas, mantendo a eficiência em nosso dia a dia.";
  @Input()
  member1: string = "João Silva";
  @Input()
  button: string = "Cart";

  query: any;
  constructor(
    private hs: HomeService,
    public router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((p) => {
      this.query = p.get("c");
    });
    this._getProductsOfACompany(this.query);
  }

  produtos: any;

  async _getProductsOfACompany(id: string) {
    await this.hs
      .getProductsOfACompany(id)
      .then((k) =>
        k.subscribe((p) => {
          console.log("p ", p);

          this.produtos = p;
        })
      )
      .catch((e) => console.error("product not found"));
  }

  productDetail(item: any) {
    this.router.navigate(["/marketplace"], { queryParams: { p: item._id } });
  }
}
