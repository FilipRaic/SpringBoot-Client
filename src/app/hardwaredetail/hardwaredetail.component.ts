import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hardware } from "../hardware";
import { HardwareService } from '../hardware.service';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardwaredetail.component.html',
  styleUrls: ['./hardwaredetail.component.css']
})
export class HardwareDetailComponent implements OnInit {
  hardware: Hardware | undefined;

  constructor(
    private hardwareService: HardwareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const code = params.get('code');
        return this.hardwareService.getHardware(<string> code);
      })
    ).subscribe((hardware: Hardware) => {
      this.hardware = hardware;
    });
  }
}
