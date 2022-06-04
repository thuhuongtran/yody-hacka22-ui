import { Component, OnInit } from '@angular/core';
import {YodyServiceService} from "../yody-service.service";

@Component({
  selector: 'app-first-core-page',
  templateUrl: './first-core-page.component.html',
  styleUrls: ['./first-core-page.component.scss']
})
export class FirstCorePageComponent implements OnInit {

  constructor(private yodyService: YodyServiceService) { }

  ngOnInit(): void {
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
}
