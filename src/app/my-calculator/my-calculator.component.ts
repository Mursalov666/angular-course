import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-my-calculator',
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss'],
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;

  public calcGroups: CalcGroup[] = [
    {
      first: { value: 5, modificator: CalcModifiers.none },
      second: { value: 5, modificator: CalcModifiers.none },
      operation: CalcOperations.plus,
    },
  ];

  public operationsBeetwenGroups: CalcOperations[] = [];
  public history: string[] = [];
  public result?: number;

  public addGroup(): void {
    this.calcGroups.push({
      first: { value: 0, modificator: CalcModifiers.none },
      second: { value: 0, modificator: CalcModifiers.none },
      operation: CalcOperations.plus,
    });
    this.operationsBeetwenGroups.push(CalcOperations.plus);
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
    this.operationsBeetwenGroups.splice(index - 1, 1);
  }

  public calcGroup(): void {
    if (this.calcGroups.length === 0) return;

    let total = this.calcValueWithModif(this.calcGroups[0].first);
    total = this.calc(
      total,
      this.calcValueWithModif(this.calcGroups[0].second),
      this.calcGroups[0].operation
    );

    let tempHistory: string[] = [
      this.formatGroup(this.calcGroups[0])
    ];

    for (let i = 1; i < this.calcGroups.length; i++) {
      const group = this.calcGroups[i];
      const groupResult = this.calc(
        this.calcValueWithModif(group.first),
        this.calcValueWithModif(group.second),
        group.operation
      );

      const betweenOp = this.operationsBeetwenGroups[i - 1] || CalcOperations.plus;
      total = this.calc(total, groupResult, betweenOp);

      tempHistory.push(`${betweenOp} ${this.formatGroup(group)}`);
    }

    tempHistory.push(`= ${total}`);
    this.history.push(tempHistory.join(' '));
    this.result = total;
  }

  private calcValueWithModif(value: CalcVar): number {
    switch (value.modificator) {
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
      default:
        return value.value;
    }
  }

  private calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
    }
  }

  private formatGroup(group: CalcGroup): string {
    const firstMod = group.first.modificator !== CalcModifiers.none ? group.first.modificator : '';
    const secondMod = group.second.modificator !== CalcModifiers.none ? group.second.modificator : '';
    return `( ${firstMod} ${group.first.value} ${group.operation} ${secondMod} ${group.second.value} )`;
  }
}
