import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderbyPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<any> {
    if (array == null) {
      return null;
    }

    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        //a is the Object and args is the orderBy condition
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
