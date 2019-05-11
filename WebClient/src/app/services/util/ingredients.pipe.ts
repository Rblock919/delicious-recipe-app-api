import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any): Array<string> {
    // console.log('in ingredients pipe...');
    let newArray = new Array<string>();
    let testString: string;
    value.forEach(element => {
      testString = element;
      // console.log('element: ' + testString.replace(' | ', ': '));
      newArray.push(testString.replace(' | ', ': '));
    });
    return newArray;
  }

}
