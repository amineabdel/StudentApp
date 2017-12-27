import { Pipe,PipeTransform } from '@angular/core';

/**
 * Generated class for the CompanySearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'companySearch',
  pure:true
})
export class CompanySearchPipe implements PipeTransform{
  /**
   * Takes a value and makes it lowercase.
   */
  transform(bedrijven: any, term: any):any {
    if(term === undefined) return bedrijven;
    return bedrijven.filter(data => {
      let b = data.Bedrijf.toLowerCase().includes(term.toLowerCase()); 
      let s = data.Sector.toLowerCase().includes(term.toLowerCase()); 
      return b || s;
    });
    
  }
}
