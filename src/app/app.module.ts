import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UploadConfigFileComponent } from './upload-config-file/upload-config-file.component';
import { CopyConfigDataComponent } from './copy-config-data/copy-config-data.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadCopyHistoryComponent } from './upload-copy-history/upload-copy-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UploadConfigFileComponent,
    CopyConfigDataComponent,
    UploadCopyHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
