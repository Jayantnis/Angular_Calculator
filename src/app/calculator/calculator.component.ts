import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // firstOperand!: null;

  constructor() { }

  current_number='0';
  first_number:any=null;
  operator:any=null;
  waitForSecondNumber:any=false;

  ngOnInit(): void {
  }

  getNumber(v :string){

    if(this.waitForSecondNumber)
    {
      this.current_number=v;
      this.waitForSecondNumber=false;
    }else{
      this.current_number==='0'?this.current_number=v:this.current_number+=v;
    }
  }

  getDecimal(){
    if(!this.current_number.includes('.')){
      this.current_number+='.';
    }

  }

  private deCalcultion(op: any,secondOp: number)
  {
    switch(op)
    {
      case '+':{ return this.first_number+=secondOp;
       }
        case '-':
       { return this.first_number-=secondOp;
       }
        case '*':
        return this.first_number*=secondOp;
        case '/':
          return this.first_number/=secondOp;
        case '=':
          return secondOp;
    }

  }

  public getOperation(op:string)
  {
    console.log(op);
    if(this.first_number==null)
    {
      this.first_number=Number(this.current_number);
    }else if(this.operator)
    {
      const result=this.deCalcultion(this.operator,Number(this.current_number));
      this.current_number=String(result);

      this.first_number=result;
      // console.log(result)
    }
    this.operator=op;
    this.waitForSecondNumber=true;
    console.log(this.first_number);


  }

public clear(){
this.current_number = '0'; this.first_number = null; this.operator = null;
this.waitForSecondNumber = false; }
}
