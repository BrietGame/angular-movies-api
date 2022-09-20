import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCaracters'
})
export class LimitCaractersPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    return value.slice(0, limit-1);
  }

}
