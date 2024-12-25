import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: number, ...args: number[]): unknown {
  //   // const [a] = args;
  //   // return Math.pow(value, a);
  //   const [a,b] = args;
  //   return value + a + b;
  // }
  transform(value: number, num:number): unknown {
   return value * num;
  }

}
