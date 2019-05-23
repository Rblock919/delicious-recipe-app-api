import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any): Array<string> {
    // console.log('in ingredients pipe...');
    const newArray = new Array<string>();
    let tempString: string;
    value.forEach(element => {
      tempString = element;
      // console.log('element: ' + testString.replace(' | ', ': '));
      newArray.push(tempString.replace(' | ', ': '));
    });
    return newArray;
  }

}
