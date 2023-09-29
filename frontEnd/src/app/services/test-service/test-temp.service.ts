import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/restAPI/rest-api.service';
import { TestTempUserService } from '../Urls/test-Urls/test-temp-Urls.service';

@Injectable({
  providedIn: 'root'
})
export class TestTempService {

  constructor(
    private restApiService: RestApiService,
    private expenseUrl:TestTempUserService

  ) { }

  create(payload:any) {
    return this.restApiService.post(
      this.expenseUrl.createExpenseUrl(),
      payload
    )
  }
  update(payload:any){
    return this.restApiService.put(
      this.expenseUrl.getUpdateUrl(),
      payload
    )
  }
  getAllExpenses() {
    return this.restApiService.get(
      this.expenseUrl.getAllExpenseUrl()
    )
  }
  getExpensesByName(name:any) {
    return this.restApiService.get(
      this.expenseUrl.getExpenseByNameUrl(name)
    )
  }
  delete(id: any) {
    return this.restApiService.delete(
      this.expenseUrl.deleteExpense(id)
    )
  }


}
