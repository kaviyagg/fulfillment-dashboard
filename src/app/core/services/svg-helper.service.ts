import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_ICONS } from '../constants/icons';

@Injectable({
  providedIn: 'root'
})
export class SvgHelperService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.createIcons();
  }

  createIcons() {
    APP_ICONS.forEach((icon) => {
      console.log(icon.path);
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
