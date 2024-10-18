import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatDivider,
        MatRadioButton,
        MatRadioGroup,
        MatButton,
        MatInput,
        RouterLink,
        MatLabel
    ],
    exports: [RegisterComponent]
})
export class RegisterModule { }
