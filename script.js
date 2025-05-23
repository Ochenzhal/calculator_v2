class Calculator {
  constructor(prevOutput, currOutput) {
    this.prevOutput = prevOutput;
    this.currOutput = currOutput;
    this.clear();
  }

  clear() {
    this.prevOperand = '';
    this.currOperand = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === '.' && this.currOperand.includes('.')) return;
    if (this.currOperand.length >= 16) return;
    this.currOperand = this.currOperand + number;
  }

  chooseOperation(operation) {
    if (this.currOperand === '') return;
    if (this.prevOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currOperand;
    this.currOperand = '';
  }

  compute() {}

  updateOutput() {
    this.currOutput.innerText = this.currOperand;
    this.prevOutput.innerText = this.prevOperand;
  }
}

const numberBtns = document.querySelectorAll('.nmbr-btn');
const operationBtns = document.querySelectorAll('.operetion-btn');
const equalsBtn = document.getElementById('equals-btn');
const deleteBtn = document.getElementById('delete-btn');
const clearBtn = document.getElementById('all-clear-btn');
const prevOutput = document.getElementById('previous-operand');
const currOutput = document.getElementById('current-operand');

const calculator = new Calculator(prevOutput, currOutput);

numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateOutput();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateOutput();
  });
});
