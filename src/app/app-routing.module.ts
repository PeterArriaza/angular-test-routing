import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadConfigFileComponent} from "./upload-config-file/upload-config-file.component";
import {CopyConfigDataComponent} from "./copy-config-data/copy-config-data.component";
import {UploadCopyHistoryComponent} from "./upload-copy-history/upload-copy-history.component";

const routes: Routes = [
  { path: '', redirectTo: '/upload-config-file', pathMatch: 'full' },
  { path: 'upload-config-file', component: UploadConfigFileComponent },
  { path: 'copy-config-data', component: CopyConfigDataComponent },
  { path: 'upload-copy-history', component: UploadCopyHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
