import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
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

  add(code: string, name: string, type: string, amount: number, price: number): void {
    code = code.trim();
    name = name.trim();
    type = type.trim();

    if (!code || !name || !type || !amount || !price) {
      return;
    }

    this.hardwareService.addHardware({ code, name, type, amount, price } as Hardware)
    .subscribe(_ => {
      this.getHardwareList();
    });
  }

  delete(code: string): void {
    code = code.trim();

    if (!code) {
      return;
    }

    this.hardwareService.deleteHardware({ code } as Hardware)
      .subscribe(_ => {
        this.getHardwareList();
      });
  }
}
