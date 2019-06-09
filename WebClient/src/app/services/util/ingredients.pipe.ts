import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientsPipe'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any): string[][] {
    // console.log('in ingredients pipe...');
    let newArray: string[][] = new Array();
    let counter = 0;
    value.forEach(element => {
      newArray.push([]);
      const tempVar = element.split(' | ');
      tempVar[0] += ':';
      console.log('tempVar: ' + tempVar);
      newArray[counter].push(tempVar[0]);
      newArray[counter].push(tempVar[1]);
      counter++;
    });

    console.log(newArray);
    return newArray;
  }

}
