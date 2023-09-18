import { AssessmentType } from './../../../models/app-models';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor.directive';
import { CommonModule } from '@angular/common';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';
import { DefaultLabelPipe } from 'src/app/pipes/default-label.pipe';
import { stringify } from 'postcss';

@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './select.component.html',
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
})
export class SelectComponent<T> extends ControlValueAccessorDirective<T> {

  @Input() options: T[] | undefined = []
  @Input() id: string = ''
  @Input() label: string = ''
  @Input() customErrorMessages: Record<string, string> = {}
  @Input() optionLabelProperty: string = ''

  stringifyJson(option: T) {
  
    return option as T
  }
}
