import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color:string="";
  @Input() text:string="";
  // @onclick() btnClick=EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
