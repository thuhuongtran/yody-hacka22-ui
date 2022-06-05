import {Component, OnInit} from '@angular/core';
import {YodyServiceService} from "../yody-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-core-page',
  templateUrl: './first-core-page.component.html',
  styleUrls: ['./first-core-page.component.scss'],
})
export class FirstCorePageComponent implements OnInit {
  shirtType: string = 'T-shirt';

  shirt: {};
  coreShirtImg: any

  constructor(private yodyService: YodyServiceService,
              private router: Router) {
    this.shirt = {title: 'test'};
    this.coreShirtImg = "assets/images/front-shirt.png";
  }

  ngOnInit(): void {
  }

  changeShirtType(type: string) {
    this.shirtType = type;
  }

  handleFileInput(event: any) {
    let file: File = event.target.files[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.yodyService.uploadFile(formData).subscribe((response) => {
      console.log(response);
    });
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
    this.coreShirtImg = "assets/images/back-shirt.png"
  }

  changeToFrontShirt() {
    this.coreShirtImg = "assets/images/front-shirt.png"
  }
}
