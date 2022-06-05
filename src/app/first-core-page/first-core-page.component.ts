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
  coreShirtImg: any;

  firstResult: any;

  price: string = '150k';

  constructor(
    private yodyService: YodyServiceService,
    private dataRoute: ActivatedRoute
  ) {
    this.coreShirtImg = 'assets/images/front-shirt.png';
    this.firstResult = {
      shirtType: 'T-shirt',
      shirtColor: 'white',
      yourDesign: null,
    };
  }

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      if (window.history.state.shirtType && window.history.state.shirtColor) {
        this.firstResult = window.history.state;
      }
    });
  }

  changeShirtType(type: string) {
    this.firstResult.shirtType = type;
    this.price =
      type === 'T-shirt' ? '150k' : type === 'Polo' ? '170k' : '165k';
  }

  changeShirtColor(color: string) {
    this.firstResult.shirtColor = color;
  }

  showRes() {
    console.log(this.firstResult);
  }

  handleFileInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.yourDesign = event.target.files[0];
      reader.readAsDataURL(this.yourDesign);

      reader.onload = (event) => {
        this.imageOutput = event.target?.result;
        this.firstResult.yourDesign = this.imageOutput;
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

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
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
    this.coreShirtImg = 'assets/images/back-shirt.png';
  }

  changeToFrontShirt() {
    this.coreShirtImg = 'assets/images/front-shirt.png';
  }
}
