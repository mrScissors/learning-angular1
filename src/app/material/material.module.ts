import { NgModule } from '@angular/core';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from '@angular/material';

const MaterialComponents=[MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule];

@NgModule({
 
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
