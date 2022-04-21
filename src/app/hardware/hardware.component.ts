import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Hardware } from '../hardware';
import { HardwareService } from '../hardware.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {
  title = 'SpringBoot-Client';
  hardwareList: Hardware[] | undefined;
  selectedHardware: Hardware | undefined;

  constructor( private hardwareService: HardwareService ) { }

  ngOnInit(): void {
    this.getHardwareList();
  }

  getHardwareList(): void {
    this.hardwareService.getHardwareList()
      .subscribe(hardwareList => this.hardwareList = hardwareList)
  }
}
