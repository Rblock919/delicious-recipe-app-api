import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  template: `
  <div class="container" style="padding-bottom: 30px">
    <div class="row">
      <div class="col-md-12">
        <div class="well well-lg">
          <div class="row">
            <div class="col-sm-12 text-center">
            <h1>Welcome to My Recipe Application. <br>
                Please Sign In or Register.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
`,
  styles: ['']
})
export class SplashPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
