import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor.directive';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

type inputType = 'text' | 'number' | 'email' | 'password'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
  ],
})
export class InputComponent<T> extends ControlValueAccessorDirective<T> {
  
  @Input() id: string = ''
  @Input() type: inputType = 'text'
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() customErrorMessages: Record<string, string> = {}
}
