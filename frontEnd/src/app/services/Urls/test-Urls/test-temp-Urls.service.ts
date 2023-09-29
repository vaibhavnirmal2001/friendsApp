import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestTempUserService {
  private readonly baseexpenseUrl='/api/expense';

  constructor() { }

  getAllExpenseUrl(){
    return this.baseexpenseUrl;
  }
  getExpenseByNameUrl(name:any){
    return this.baseexpenseUrl+"/"+name;
  }

  createExpenseUrl(){
    return this.baseexpenseUrl;
  }

  deleteExpense(id:any){
    return this.baseexpenseUrl+'/'+id;
  }

  getUpdateUrl(){
    return this.baseexpenseUrl;

  }

}
