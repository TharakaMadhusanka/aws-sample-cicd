import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-sample';
  sampleText = environment.sampleText;
  constructor() {
  console.log(this.sampleText, 'This will throw error');

    if (this.sampleText === "I am Sample Parameter Store")
    console.log(this.sampleText, 'This will throw error');
    console.log('Param is reading!');
  }
}
