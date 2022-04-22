import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'github'
})
export class GithubPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
