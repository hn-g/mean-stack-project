// stack.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StackComponent } from './stack.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should push item to stack', () => {
    component.stackSize = 10;
    component.inputNumber = 1;
    component.pushToStack();
    setTimeout(() => {
      expect(component.stackSize).toBe(20);
    }, 2000);
  });

  it('should pop item from stack', () => {
    component.stack = [1, 2, 3];
    component.popFromStack();
    component.loadStack();
    setTimeout(() => {
      expect(component.stack.length).toBe(2);
    }, 2000);
  });

  it('should update stack size', () => {
    component.stackSize = 20;
    component.updateStackSize();
    expect(component.stackSize).toBe(20);
  });
});
