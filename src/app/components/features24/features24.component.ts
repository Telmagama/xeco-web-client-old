import { Component, Input } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-features24",
  templateUrl: "features24.component.html",
  styleUrls: ["features24.component.css"],
})
export class Features24 {
  @Input()
  feature1ImgAlt: string = "Criação de franquias virtuais";
  @Input()
  feature3Description: string = "Serviços de entregas disponíveis";
  @Input()
  feature3Title: string = "Entregas rápidas e seguras";
  @Input()
  feature3ImgSrc: string =
    "https://images.unsplash.com/photo-1598304871571-c4a27892be12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1MXw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  feature1ImgSrc: string =
    "https://images.unsplash.com/photo-1676630593025-498b4084712b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  feature2Description: string =
    "Guia comercial para auxiliar na expansão do negócio";
  @Input()
  feature1Title: string = "Franquias Virtuais";
  @Input()
  feature3ImgAlt: string = "Serviços de entregas";
  @Input()
  feature1Description: string = "Expanda seu negócio localmente com facilidade";
  @Input()
  salePrice: string = "R$ 00,00";
  @Input()
  feature2ImgSrc: string =
    "https://images.unsplash.com/photo-1693390846958-dcac45062430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDAzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080";
  @Input()
  feature2ImgAlt: string = "Guia comercial";
  @Input()
  feature2Title: string = "Guia Comercial";
  activeTab: number = 0;
  constructor() {}
  _downloadApp() {
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
        text: "Baixe nosso app e faça suas compras",
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
}
