import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [TableModule],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent {
  devices = [
    { patientId: '300837441004', device: '204001 - Hub', iccid: '89011703279114821055', mac: '--' },
    { patientId: '215883179036', device: '0043 - Cellular BPM', iccid: '89011703271095993191', mac: '--' },
    { patientId: '007355810059', device: '0003 - Bluetooth Pulse Ox', iccid: '--', mac: 'C5:90:DF:CC:F5:CA' },
    { patientId: '549949887334', device: '0040 - Bluetooth BPM', iccid: '--', mac: '--' },
    { patientId: '424615567690', device: '204001 - Hub', iccid: '89011703270218694287', mac: '--' },
    { patientId: '562111780769', device: '204001 - Hub', iccid: '89011703270262045758', mac: '--' },
    { patientId: '161517348680', device: '0022 - Bluetooth Scale', iccid: '--', mac: '04:2E:EB:2F:AE:AF' },
    { patientId: '744815345357', device: '0040 - Bluetooth BPM', iccid: '--', mac: '54:A3:D5:98:CB:7F' },
    { patientId: '260677194111', device: '0025 - Cellular Scale', iccid: '89011703270859791182', mac: '--' }
  ];
}
