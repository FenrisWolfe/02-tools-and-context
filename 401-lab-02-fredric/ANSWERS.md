#Scope and Context

## Answer One:
Hoisting allows the printGreeting function to be called before where it is actually written is due to the *interpreter* (during the compile phase) moving all variable and function declarations to the top of the current scope. But we need to understand that only the **ACTUAL** declarations are hoisted.

## Answer Two:
In our next example *printGoodbye* can't be executed because it is outside the scope. 
In fact the whole code will fail because of the "hoisted" variable declaration of printGoodbye **IS** hoisted (before the function call) but because the assignment to printGoodbye is **NOT** hoisted we get an error for trying to call a *non-function* variable.