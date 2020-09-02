import { Component, OnInit } from '@angular/core';
import { Shape, validate } from "../../../pkg";

@Component({
  selector: 'app-rust',
  templateUrl: './rust.component.html',
  styleUrls: ['./rust.component.scss']
})
export class RustComponent implements OnInit {
  message: string;
  elements = ['canvas1', 'canvas2', 'canvas3', 'canvas4', 'canvas5', 'canvas6'];

  constructor() { }

  ngOnInit() {
    setInterval(() => this.render(), 2000);
  }

  checkInput(event: any) {  
    let result = validate(event.target.value);
    this.message = result ? 'Valid' : 'Invalid';
  }

  render() {
    this.elements.forEach(element => {
        let shape = Shape.new();
        shape.draw(element);
    });
  }
}
