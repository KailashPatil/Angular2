import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, args?: any): any {
    if (array) {
      let sortField = args[0];
      let sortDirection = args[1];
      let modifier = 1; // modifier is just to make sort reverse, by default Ascending order

      if (sortDirection == "desc") {
        modifier = -1; // modifier changes to -1 to make Descending order
      }

      console.log("sortField", sortField, array);

      array.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return -1 * modifier;
        } else if (a[sortField] > b[sortField]) {
          return 1 * modifier;
        } else {
          return 0; // if a and b equal
        }
      });

      return array;
    }
  }
}
