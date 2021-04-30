import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() type: string


  public customOptions: OwlOptions = {
    dots: false,
    loop: true,
    rewind: false,
    autoplay: false,
    nav: true,
    rtl:true,
    stagePadding: 0,
    margin: 4,
    navText: ["<img src='../../../assets/icons/leftArrow.svg'>","<img src='../../../assets/icons/rightArrow.svg'>"],
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      768: {
        items: 3,
        slideBy: 1
      },
      1024: {
        items: 5,
        slideBy: 1
      }
    }
  }

  clients = [
    {
      id: "1",
      url: "../../../assets/ourClientsLogos/1.svg"
    },
    {
      id: "2",
      url: "../../../assets/ourClientsLogos/2.svg"
    },
    {
      id: "3",
      url: "../../../assets/ourClientsLogos/3.svg"
    },
    {
      id: "4",
      url: "../../../assets/ourClientsLogos/4.svg"
    },
    {
      id: "5",
      url: "../../../assets/ourClientsLogos/5.svg"
    },
    {
      id: "6",
      url: "../../../assets/ourClientsLogos/6.svg"
    },
    {
      id: "7",
      url: "../../../assets/ourClientsLogos/7.svg"
    },
    {
      id: "8",
      url: "../../../assets/ourClientsLogos/8.svg"
    },
    {
      id: "9",
      url: "../../../assets/ourClientsLogos/1.svg"
    },
    {
      id: "10",
      url: "../../../assets/ourClientsLogos/2.svg"
    },
    {
      id: "11",
      url: "../../../assets/ourClientsLogos/3.svg"
    },
  ]

  partners = [
    {
      id: "1",
      url: "../../../assets/ourPartners/1.svg"
    },
    {
      id: "2",
      url: "../../../assets/ourPartners/2.svg"
    },
    {
      id: "3",
      url: "../../../assets/ourPartners/3.svg"
    },
    {
      id: "4",
      url: "../../../assets/ourPartners/4.svg"
    },
    {
      id: "5",
      url: "../../../assets/ourPartners/5.svg"
    },
  ]

  slides = []

  constructor() { }

  ngOnInit(): void {

    if (this.type == "clients") {
      this.slides = this.clients
    } else {
      this.slides = this.partners
    }
  }
}
