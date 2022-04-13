import {Component, OnInit} from '@angular/core';
import {Hardware} from "./hardware";
import {HardwareService} from "./hardware.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpringBoot-Client';
  hardwareList: Hardware[] | undefined;
  selectedHardware: Hardware | undefined;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.getHardware();
  }

  onSelect(hardware: Hardware): void {
    this.selectedHardware = hardware;
  }

  getHardware(): void {
    this.hardwareService.getHardware()
      .subscribe(hardwareList => this.hardwareList = hardwareList)
  }
}
