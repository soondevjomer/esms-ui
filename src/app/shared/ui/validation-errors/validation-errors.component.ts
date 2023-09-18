import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  standalone: true,
  templateUrl: './validation-errors.component.html',
  imports: [CommonModule],
})
export class ValidationErrorsComponent implements OnInit, OnChanges {
  @Input() errors: Record<string, ValidationErrors> | null = {};

  @Input() customErrorMessages: Record<string, string> = {};

  errorMessages: Record<string, string> = {
    required: 'This field is required',
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { customErrorMessages } = changes;
    if (customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue,
      };
    }
  }
}
