import {Component, OnInit} from '@angular/core';
import {YodyServiceService} from '../yody-service.service';
import {ActivatedRoute} from '@angular/router';
import {Design} from "../design";

@Component({
  selector: 'app-first-core-page',
  templateUrl: './first-core-page.component.html',
  styleUrls: ['./first-core-page.component.scss'],
})
export class FirstCorePageComponent implements OnInit {
  designCards: Design[];
  shirtType: string = 'T-shirt';
  shirtColor: string = 'white';
  isLeftVisited: boolean = true;
  isRightVisited: boolean = false;
  yourDesign: any;
  imageOutput: any;
  coreShirtImg: any
  coreColor: string = "white"
  thumnailImgFront: any;
  thumnailImgBack: any;
  URL = window.URL || window.webkitURL;
  designImg: any;
  uploadImgName: string = "File: PNG";
  uploadImgSize: string = "Giới hạn dung lượng file: 50MB";

  firstPage = {
    shirtType: 'T-shirt',
    shirtColor: 'white',
    yourDesign: null,
  };
  designMode: any;

  constructor(
    private yodyService: YodyServiceService,
    private dataRoute: ActivatedRoute,
  ) {
    this.coreShirtImg = "assets/images/front-shirt.png";
    this.thumnailImgFront = "assets/images/front-shirt.png";
    this.thumnailImgBack = "assets/images/back-shirt.png";
    this.designMode = "border-img";
    this.designCards = []
  }

  ngOnInit() {
    this.dataRoute.paramMap.subscribe(() => {
      this.firstPage = window.history.state;
    });
    this.fetchDesignCards();
    console.log(this.designCards)
  }

  changeShirtType(type: string) {
    this.firstPage.shirtType = type;
  }

  changeShirtColor(color: string) {
    this.firstPage.shirtColor = color;
  }

  handleFileInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.yourDesign = event.target.files[0];
      reader.readAsDataURL(this.yourDesign);

      reader.onload = (event) => {
        this.imageOutput = event.target?.result;
      };
    }
    let formData: FormData = new FormData();
    formData.append('file', this.yourDesign, this.yourDesign.name);
    this.designImg = undefined;
    this.designImg = this.imageOutput;
    this.uploadImgName = this.yourDesign.name;
    this.uploadImgSize = this.yourDesign.size % 1000 + 'KB';
    localStorage.setItem('upload-design', this.designImg);
  }

  searchDesignsByTags(event: any) {
    this.yodyService.searchDesignsByTags(event.target.value).subscribe((response) => {
      this.designCards = response;
      console.log('hehe after search ', response);
    }, error => {
      console.log(error)
    });
  }

  changeToBackShirt() {
    if (this.coreColor == "white") {
      this.coreShirtImg = "assets/images/back-shirt.png";
      this.thumnailImgFront = "assets/images/front-shirt.png";
      this.thumnailImgBack = "assets/images/back-shirt.png";
    } else {
      this.coreShirtImg = "assets/images/blue-back.png"
      this.thumnailImgFront = "assets/images/blue-front.png";
      this.thumnailImgBack = "assets/images/blue-back.png";
    }
  }

  changeToFrontShirt() {
    if (this.coreColor == "white") {
      this.coreShirtImg = "assets/images/front-shirt.png";
      this.thumnailImgFront = "assets/images/front-shirt.png";
      this.thumnailImgBack = "assets/images/back-shirt.png";
    } else {
      this.coreShirtImg = "assets/images/blue-front.png"
      this.thumnailImgFront = "assets/images/blue-front.png";
      this.thumnailImgBack = "assets/images/blue-back.png";
    }
  }

  changeToCoreBlueShirt() {
    this.coreColor = "blue"
    this.coreShirtImg = "assets/images/blue-front.png"
    this.thumnailImgFront = "assets/images/blue-front.png";
    this.thumnailImgBack = "assets/images/blue-back.png";
  }

  changeToCoreWhiteShirt() {
    this.coreColor = "white"
    this.coreShirtImg = "assets/images/front-shirt.png"
    this.thumnailImgFront = "assets/images/front-shirt.png";
    this.thumnailImgBack = "assets/images/back-shirt.png";
  }

  checkLeftVisited() {
    this.isLeftVisited = !this.isLeftVisited;
    this.isRightVisited = !this.isRightVisited;
    this.designMode = "border-img"
  }

  checkRightVisited() {
    this.isRightVisited = !this.isRightVisited;
    this.isLeftVisited = !this.isLeftVisited;
    this.designMode = "none-border-img"
  }

  fetchDesignCards() {
    this.yodyService.searchDesigns().subscribe((response) => {
      response
        .filter(design => design.imageLink && design.title && design.price)
        .forEach((card => this.designCards.push({
          title: card.title,
          price: card.price,
          imageLink: card.imageLink
        })))
      console.log(this.designCards)
    }, error => {
      console.log(error);
    });
  }

  replaceDesignImage(design: Design) {
    this.designImg = undefined;
    this.designImg = design.imageLink;
  }
}
