import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../models/user.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(Users: User[], searchText: string): any {
    if (!Users) { return []; }
    if (!searchText) { return Users; }
    searchText = searchText.toLowerCase();
    return Users.filter(it => {
      // searches based on name || description
      return it.name.toLowerCase().includes(searchText) || it.name.toLowerCase().includes(searchText);
    });
  }

}
