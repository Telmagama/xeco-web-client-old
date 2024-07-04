import { Component, Input } from "@angular/core";

@Component({
  selector: "app-banner1",
  templateUrl: "banner1.component.html",
  styleUrls: ["banner1.component.css"],
})
export class Banner1 {
  @Input()
  slogan: string = "Slogan";
  @Input()
  like: string = "Favoritar";
  @Input()
  nome: string = "Nome da loja";
  @Input()
  logo: string = "https://play.teleporthq.io/static/svg/default-img.svg";
  @Input()
  imageAlt: string = "image";
  @Input()
  nomeFranquia: string = "Heading";
  @Input()
  telefone: string = "Text";
  @Input()
  email: string = "Text";
  constructor() {}
}
