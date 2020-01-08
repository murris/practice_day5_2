import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return value;
    }else {
      return "default.jpg";
    }
  }

}
