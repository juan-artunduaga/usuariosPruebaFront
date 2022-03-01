import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activo'
})
export class ActivoPipe implements PipeTransform {

  transform(value: string): string {
      if(value ==="1"){
        return "ACTIVO";
      }
      else{
        return "NO ACTIVO"
      }
    
  }

}
