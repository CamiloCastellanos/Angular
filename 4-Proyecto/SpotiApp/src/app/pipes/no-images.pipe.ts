import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(image: any[]): string {
    if (!image || image.length <= 0) {
      return "assets/img/noImages.png";
    }
    return image[0].url;
  }
}
