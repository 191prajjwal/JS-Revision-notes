// By default js is synchronous and single threaded.
//synchronous means after completing the current statment only we can go to next statement.
//Single threaded means that executing one statement at a time

//Blocking nature:
//while a statment is running we cant run other statement so this statment is blocking other statements

//Non Blocking nature:
//while we running a statement if it is doing some asynchronous task we can run other synchronous statements and once all these synchronous task is done then that asynchronous task comes to call stack.

//Blocking nature or non blocking nature both depends on use case.

//the js becomes async due to use of web apis such as setinterval, settimeout , fetch etc.

//to run js asynchronously we use event loops and callback queues.

//so when some async tasks come to call stack it is sent to web api then there it waits for its timer and all or it fetches data from endpoint and then register a callback function after waiting or fetching the data and sent to callback queue.
// generally there are two callback queues one for normal async callbacks and second for promise callbacks registered due to fetching apis and all. the callback queue for storing promise callbacks is also known as high priority queue.
//now event loop will see the call stack continously and as soon as callstack is empty it will push the callbacks from higher priority queue then from callback queue to callstack and executes it.
//so it event loop is the one that manages async behaviour of js.


//In image 1.png see how this all works.
