/**
 * returns either the system provided property label or default label
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultLabel'
})
export class DefaultLabelPipe implements PipeTransform {
  transform(value: any, defaultValue: string = 'No Label'): string {
    return value || defaultValue;
  }
}