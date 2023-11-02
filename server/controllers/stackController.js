// controllers/stackController.js
const Stack = require('../models/Stack');

let stack = new Stack(5); // Define stack size

function pushToStack(req, res) {
    const item = req.body.number;
    const success = stack.push(item);
    if (success) {
        res.json({ success: true, message: 'Item pushed to stack.' });
    } else {
        res.status(400).json({ success: false, message: 'Stack is full.' });
    }
}

function popFromStack(req, res) {
    const item = stack.pop();
    if (item !== null) {
        res.json({ success: true, item });
    } else {
        res.status(400).json({ success: false, message: 'Stack is empty.' });
    }
}

function getStack(req, res) {
    const currentStack = stack.getStack();
    res.json({ stack: currentStack });
}

function updateStackSize(req, res) {
    const newSize = req.body.size;
    if(isNaN(newSize))
    {
        res.json({ success: false, size: "Please enter valid size." });
    }
    const currentSize = stack.size;
    if (newSize <= currentSize) {
        const newStack = new Stack(newSize);
        const itemsToTransfer = stack.getStack().slice(0, newSize);
        itemsToTransfer.forEach(item => {
            newStack.push(item);
        });
        stack = newStack;
    } else {
        const newStack = new Stack(newSize);
        const itemsToTransfer = stack.getStack().slice(0, newSize);
        itemsToTransfer.forEach(item => {
            newStack.push(item);
        });
        stack = newStack;
    }
    res.json({ success: true, size: newSize });
}

function getStackSize(req, res) {
    res.json({ size: stack.size });
}

module.exports = {
    pushToStack,
    popFromStack,
    getStack,
    updateStackSize,
    getStackSize
};
