import { Component, OnInit } from '@angular/core';
import { TestTempService } from 'src/app/services/test-service/test-temp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseDTO } from 'src/app/dtos/ExpenseDTO';
import { ExpenseEnum } from 'src/app/enums/expenseEnum';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditExpenseComponent } from '../edit-expense/edit-expense/edit-expense.component';
@Component({
  selector: 'app-expense-test',
  templateUrl: './expense-test.component.html',
  styleUrls: ['./expense-test.component.scss']
})
export class ExpenseTestComponent implements OnInit {
  myForm: FormGroup | any;
  allExpenses: any = [];
  expenseDto: any = new ExpenseDTO();
  expenseCategories = Object.values(ExpenseEnum);
  constructor(
    private testService: TestTempService,
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.showExpense();
    this.createForm();

  }


  showExpense() {
    this.allExpenses = [];
    this.testService.getAllExpenses().subscribe(expenses => {
      let res = expenses.body;
      for (let i = 0; i < res.length; i++) {
        this.allExpenses.push(res[i]);
      }
    }, e => console.log(e));
    console.log(this.allExpenses);
  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  submitForm() {
    this.expenseDto.expenseName = this.myForm.get('name').value;
    this.expenseDto.expenseCategory = this.myForm.get('category').value;
    this.expenseDto.expenseAmount = this.myForm.get('amount').value;

    this.testService.create(this.expenseDto).subscribe(res => {
      this.showExpense();
    this.createForm();

    })
    console.log(this.expenseDto);
  }

  editExpense(expense: any) {
    this.testService.getExpensesByName(expense.expenseName).subscribe(res => {
      console.log(res.body);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "auto";
      dialogConfig.height = "auto";
      dialogConfig.data = {
        expense: expense
      }
      const dialogRef = this.dialog.open(EditExpenseComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.showExpense();
      });

    })

  }

  deleteExpense(expense:any){
    this.testService.delete(expense.id).subscribe(res=>{
      this.showExpense();
    })
    
  }

}
