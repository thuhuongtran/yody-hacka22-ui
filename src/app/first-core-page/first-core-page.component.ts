import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {YodyServiceService} from "../yody-service.service";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-first-core-page',
  templateUrl: './first-core-page.component.html',
  styleUrls: ['./first-core-page.component.scss']
})
export class FirstCorePageComponent implements OnInit {
  shirt: {};
  coreShirtImg: any

  constructor(private yodyService: YodyServiceService,
              private router: Router,
              private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document: Document) {
    this.shirt = {};
    this.coreShirtImg = "assets/images/front-shirt.png";
  }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
  $('#draggableHelper').draggable({
    containment: "#frameBorder",
\tscroll: false
});
$('#image').resizable();
`;
    this._renderer2.appendChild(this._document.body, script);
  }

  handleFileInput(event: any) {
    let file: File = event.target.files[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.yodyService.uploadFile(formData).subscribe(
      (response) => {
        console.log(response)
      }
    );
  }

  getDesigns(tags: string[]) {
    this.yodyService.searchDesignsByTags(tags).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  clickOnContinue() {
    this.shirt = {
      title: "test"
    }
    this.router.navigateByUrl('/quantity-select', {state: this.shirt});
  }

  changeToBackShirt() {
    this.coreShirtImg = "assets/images/back-shirt.png"
  }

  changeToFrontShirt() {
    this.coreShirtImg = "assets/images/front-shirt.png"
  }
}
