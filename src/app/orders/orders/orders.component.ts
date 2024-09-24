import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, TabViewModule, ProgressSpinnerModule,
    ButtonModule, InputTextModule, InputNumberModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  searchQuery = '';

  devices = [
    { sku: '0043', name: 'Cellular BPM', image: 'path_to_image/cellular_bpm.png', inventory: 45, quantity: 5 },
    { sku: '0003', name: 'Bluetooth Pulse Ox', image: 'path_to_image/bluetooth_pulse_ox.png', inventory: 22, quantity: 0 },
    { sku: '0022', name: 'Bluetooth Scale', image: 'path_to_image/bluetooth_scale.png', inventory: 13, quantity: 1 }
  ];

  get filteredDevices() {
    if (this.searchQuery) {
      return this.devices.filter(device =>
        device.sku.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        device.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.devices;
  }

  placeOrder() {
    console.log('Order placed:', this.devices.filter(device => device.quantity > 0));
    alert('Order placed successfully!');
  }
}
