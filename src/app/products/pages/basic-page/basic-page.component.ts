import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower: string = 'ruslan krasiy';
  public nameUpper: string = 'RUSLAN KRASIY';
  public fullname: string = 'rUslaN krAsiY';
  public customDate: Date = new Date();
}
