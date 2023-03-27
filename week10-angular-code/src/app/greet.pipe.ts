import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  // transform(value: string): string {
  //   return `Hello, ${value}`;
  // }

  transform(firstname: string, lastname:string): string {
    return `${firstname} ${lastname}`;
  }

}
