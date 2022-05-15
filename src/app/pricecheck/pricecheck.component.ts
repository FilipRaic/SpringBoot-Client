import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricecheck',
  templateUrl: './pricecheck.component.html',
  styleUrls: ['./pricecheck.component.css']
})
export class PricecheckComponent implements OnInit {

  @Input() price: number | undefined

  constructor() { }

  ngOnInit(): void {
  }
}
