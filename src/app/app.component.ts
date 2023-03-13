import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private pdfService: NgxExtendedPdfViewerService
  ) {
  }

}
