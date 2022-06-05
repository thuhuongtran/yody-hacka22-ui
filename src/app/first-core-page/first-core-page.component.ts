import { Component, OnInit } from '@angular/core';
import { YodyServiceService } from '../yody-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-core-page',
  templateUrl: './first-core-page.component.html',
  styleUrls: ['./first-core-page.component.scss'],
})
export class FirstCorePageComponent implements OnInit {
  shirtType: string = 'T-shirt';
  shirtColor: string = 'white';
  yourDesign: any;
  imageOutput: any;
  coreShirtImg: any
  coreColor: string = "white"
  thumnailImgFront: any;
  thumnailImgBack: any;

  firstPage = {
    shirtType: 'T-shirt',
    shirtColor: 'white',
    yourDesign: null,
  };

  constructor(
    private yodyService: YodyServiceService,
    private dataRoute: ActivatedRoute
  ) {
    this.coreShirtImg = "assets/images/front-shirt.png";
    this.thumnailImgFront = "assets/images/front-shirt.png";
    this.thumnailImgBack = "assets/images/back-shirt.png";
  }

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      this.firstPage = window.history.state;
    });
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

    // TODO: GET file URL or Base64 to store to object

    // this.yodyService.uploadFile(formData).subscribe((response) => {
    //   console.log(response);
    //   this.firstPage.yourDesign = response.xx;
    // });
  }

  getDesigns(tags: string[]) {
    this.yodyService.searchDesignsByTags(tags).subscribe((response) => {
      console.log(response);
    });
  }

  // clickOnContinue() {
  //   this.shirt = {
  //     title: "test"
  //   }
  //   this.router.navigateByUrl('/quantity-select', {state: this.shirt});
  // }

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
    if(this.coreColor == "white") {
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
    this.thumnailImgBack = "assets/images/blue-back.png";  }

  changeToCoreWhiteShirt() {
    this.coreColor = "white"
    this.coreShirtImg = "assets/images/front-shirt.png"
    this.thumnailImgFront = "assets/images/front-shirt.png";
    this.thumnailImgBack = "assets/images/back-shirt.png";
  }
}
