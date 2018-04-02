import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MathProvider } from "../../providers/math/math";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private math: MathProvider) {}

  add(param1, param2) {
    let data = {
      param1: param1,
      param2: param2
    };
    this.math
      .add(data)
      .then(response => {
        console.log(response);
        alert("Total is : " + response);
      })
      .catch(error => {
        console.log(error);
        alert("Error is : " + error);
      });
  }

  substract(param1, param2) {
    let data = {
      param1: param1,
      param2: param2
    };
    this.math
      .substract(data)
      .then(response => {
        console.log(response);
        alert("Total is : " + response);
      })
      .catch(error => {
        console.log(error);
        alert("Error is : " + error);
      });
  }
}
