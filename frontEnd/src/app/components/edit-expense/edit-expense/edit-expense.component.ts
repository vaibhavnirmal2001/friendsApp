import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExpenseDTO } from 'src/app/dtos/ExpenseDTO';
import { ExpenseEnum } from 'src/app/enums/expenseEnum';
import { TestTempService } from 'src/app/services/test-service/test-temp.service';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {
  myForm: FormGroup | any;
  expenseDto: any = new ExpenseDTO();
  expenseCategories = Object.values(ExpenseEnum);

  constructor(
    public dialogRef: MatDialogRef<EditExpenseComponent>,
    private testService: TestTempService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public expense: any
  ) {}



  ngOnInit(): void {
    console.log(this.expense.expense);
    this.createForm();
    
    
  }
  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required, ],
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
    
      this.myForm.get('name').setValue(this.expense.expense.expenseName);
      this.myForm.get('name').disable();
      this.myForm.get('category').setValue(this.expense.expense.expenseCategory);
      this.myForm.get('amount').setValue(this.expense.expense.expenseAmount);
    
  }
  submitForm() {
    this.expenseDto.expenseName = this.myForm.get('name').value;
    this.expenseDto.expenseCategory = this.myForm.get('category').value;
    this.expenseDto.expenseAmount = this.myForm.get('amount').value;
    this.expenseDto.id = this.expense.expense.id;

    this.testService.update(this.expenseDto).subscribe(res => {
      this.dialogRef.close();
    })
    console.log(this.expenseDto);
  }
  closeDilogue(){
    this.dialogRef.close();
  }

}
