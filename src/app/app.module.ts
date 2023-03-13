import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** PdfViewer */
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FileInfoComponent } from './file-info/file-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
