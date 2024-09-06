let age = 12

switch(age){
    case 12: console.log("This age is for learning and playing")
    break;//putting break after each case is important otherwise the case below it will also be executed
    case 18:console.log("This age is for grinding and working hard for your passion")
    break;
    case 24:console.log("This age is for excelling in your field and finding love")
    break;
    case 30: console.log("This age is for saving money for travelling abroad")
    break;
    default: console.log("I dont know what to say")
    //default need not to be at last we can place it anywhere nut then use break after default too if it is not last
    //we can ignore using break after last case.

}