import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
})
export class UniquePipe implements PipeTransform {
  transform(value: any[], property?: string): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return property
      ? value.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t[property] === obj[property])
      )
      : [...new Set(value)];
  }
}
