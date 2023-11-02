import { Component, OnInit } from '@angular/core';
import { StackService } from '../stack.service';

@Component({
  selector: 'stack-app',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  stack: number[] = [];
  inputNumber: any;
  stackSize: number = 0;

  constructor(public stackService: StackService) { }

  ngOnInit(): void {
    this.loadStack();
    this.getStackSize();
  }

  loadStack() {
    this.stackService.getStack().subscribe((stack:any) => {
      this.stack = stack.stack;
    });
  }

  pushToStack() {
    if(this.stack.length == this.stackSize)
    {
      alert('Stack already full.');
      this.inputNumber = null;
      return;
    }
    if (this.inputNumber && !isNaN(this.inputNumber)) {
      this.stackService.pushToStack(this.inputNumber).subscribe(stack => {
        this.loadStack();
        this.inputNumber = null;
      });
    } else {
      alert('Please enter a valid number.');
    }
  }

  popFromStack() {
    if(this.stack.length == 0)
    {
      alert('Stack already empty.');
    }
    else
      this.stackService.popFromStack().subscribe(stack => this.loadStack());
  }

  updateStackSize(): void {
    this.stackService.updateStackSize(this.stackSize).subscribe((response: any) => {
      if (response.success) {
        this.stackSize = response.size;
        this.loadStack();
        alert('Stack size updated.');
      } else {
        alert(response.message);
      }
    });
  }

  getStackSize() {
    this.stackService.getStackSize().subscribe((response:any) => {
      this.stackSize = response.size;
    });
  }
}
