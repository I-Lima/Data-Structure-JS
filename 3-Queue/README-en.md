[Leia esta página em português](./README.md)

**Summary**

- [Queue](#queue)
  - [Introduction](#introduction)
  - [Methods](#methods)
  - [Applications](#applications)
  - [Complexity Analysis](#complexity-analysis)
- [Double-Ended Queue (Deque)](#double-ended-queue-deque)
  - [Introduction](#introduction-1)
  - [Methods](#methods-1)
  - [Applications](#applications-1)
  - [Complexity Analysis](#complexity-analysis-1)

<img src="./Assets/GraphicsQueues-V2_3_051122.webp" width="100%" />

# Queue

## Introduction

What sets it apart from the stack is the order in which elements are removed: while in the stack "last in, first out" applies, in the queue "first in, first out" (FIFO) is the rule. Its fundamental idea is that we can only insert a new element at the end of the queue and can only take out the element from the front.

The queue structure is a natural analogy to the concept of a line that we use in our daily lives: the first to enter a line is the first to be served.

A well-known example in computer science is the print queue. Suppose we need to print five documents. We open each of the documents and click the print button. Each one will be sent to the printer queue. The first document for which we requested printing will be printed first, and so on, until all have been printed.

## Methods

- Enqueue: Adds an element to the end of the queue.
- Dequeue: Removes the first element from the queue. Also returns the removed element.
- Peek: Returns the first element from the queue without removing it.
- isEmpty: Checks if the queue is empty.
- Size: Returns the number of elements in the queue.
- Clear: Removes all elements from the queue, leaving it empty.

## Applications

- Real-time queuing systems.
- Computer networks.
- Printing systems.
- Server task processing.
- Order management systems.

## Complexity Analysis

The enqueue and dequeue operations in the queue always perform basic operations. Thus, they are constant-time operations and take O(1) time.

However, the operation to traverse the entire queue involves traversing all the elements stored in it. Considering that a queue contains *n* elements, the runtime will be O(n).

The operation to empty the queue involves removing all elements from it. The time spent on this operation depends on the programming language being used.

# Double-Ended Queue (Deque)

## Introduction

The double-ended queue, or deque, is a special queue that allows us to insert and remove elements from both the front and the back of the queue.

In computer science, a common application of a deque is in storing a list of operations to undo actions (undo). Whenever a user performs an operation in the software, a push of that operation will be made onto the deque. When the user clicks the Undo button, a pop operation will be performed on the deque, which means that operation will be removed from the end.

## Methods

- addFront: Adds an element to the end of the deque.
- addBack: Adds an element to the front of the deque.
- removeFront: Removes the first element of the deque.
- removeBack: Removes the last element of the deque.
- peekFront: Returns the first element of the deque without removing it.
- peekBack: Returns the last element of the deque without removing it.
- isEmpty: Checks if the deque is empty.
- size: Returns the number of elements in the deque.
- clear: Removes all elements from the deque, leaving it empty.

## Applications

- Priority queue algorithms.
- Implementation of caches.
- Processing buffers in network communication.

## Complexity Analysis

The insertion and removal operations in the deque always perform basic operations. Thus, they are constant-time operations and take O(1) time.

However, the operation to traverse the entire deque involves traversing all the elements stored in it. Considering that a deque contains *n* elements, the runtime will be O(n).

The operation to empty the deque involves removing all elements from it. The time spent on this operation depends on the programming language being used.
