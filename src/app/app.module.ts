import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsFormBuilderComponent } from './layout/as-form-builder/as-form-builder.component';
import { ComponentsModule } from './layout/shared-components/components/components.module';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './layout/shared-components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AsFormBuilderComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
