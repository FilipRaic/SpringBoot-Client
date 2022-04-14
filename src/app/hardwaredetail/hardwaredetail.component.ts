import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from "../hardware";

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardwaredetail.component.html',
  styleUrls: ['./hardwaredetail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  @Input() hardware: Hardware | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
