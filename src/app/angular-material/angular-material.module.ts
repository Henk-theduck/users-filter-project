import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
@NgModule(
    {
        imports:[
            MatListModule,
            MatDividerModule, 
            MatFormFieldModule, 
            MatInputModule,
            MatDatepickerModule,
            MatSelectModule,
            MatButtonModule,
            MatTableModule
        ],
        exports:[
            MatListModule,
            MatDividerModule,
            MatFormFieldModule, 
            MatInputModule,
            MatDatepickerModule,
            MatSelectModule,
            MatButtonModule,
            MatTableModule
        ],
    }
)
export class AngularMaterialModule{}