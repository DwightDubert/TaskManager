let tasks = [];
let input;
let input1;
let input2;
let gamego = true;
let back = true;

while (gamego == true){
    if (back == true) {
        input = prompt("What you need \n 1. new task \n 2. view tasks \n 3. remove task \n 4. kill");
        back = false;
    }
    if (input == 1) {
        input1 = prompt("what is the task");
        tasks.push(" "+input1)
        back = true;
    } else if (input == 2){
        alert(tasks)
        back = true;
    } else if (input == 3){
        input2 =prompt("remove either the first or last item (1) first (2) last"+tasks)
        if(input2 == 1){
            tasks.shift()
        } else if (input2 == 2){
            tasks.pop()
        }
        back = true;
    } else if (input == 4){
        gamego = false;
    } else {
        alert("._.")
        back = true;
    }
}