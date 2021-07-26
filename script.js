function getHistory(){
    return document.getElementById("history-value").innerText;
}

function setHistory(num){
    document.getElementById("history-value").innerText = num;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("outputt").innerText = num;
    }else{
    
        document.getElementById("outputt").innerText = num;
    }
}
function getFormattedValue(num){
    var n = Number(n);
    var value = n.toLocaleString("en");
    return value;
}

function reverseFormat(num){
    return Number(num.replace(/,/g,''))
}

function getOutput(){
    return document.getElementById("outputt").innerText;
}

function calculate(line){
    var arr = [];
    var ops = [];
    var start = 0;
    for(var i = 0; i < line.length; i++){
        if(isNaN(line[i+1])){
            arr.push(line.slice(start,i+1));
            start = i + 2;
        }
        if(isNaN(line[i])){
            ops.push(line[i]);
        }
    }
    
    if (ops.length + 1 == arr.length){
        while(arr.length >= 2){
            for(var i = 0; i < ops.length; i++){
                if(ops.includes("*") || ops.includes("/")){
                    console.log(ops);
                    if(ops[i] == "*"){
                        arr[i] =parseInt(arr[i]) * parseInt(arr[i+1]);
                        arr.splice(i + 1, 1);
                        ops.splice(i , 1);

                    }
                    else if(ops[i] == "/"){
                        arr[i] = parseInt(arr[i]) / parseInt(arr[i+1]);
                        arr.splice(i + 1, 1);
                        ops.splice(i, 1);

                    }
                }else{
                    if(ops[i] == "+"){
                        arr[i] =parseInt(arr[i]) + parseInt(arr[i+1]);
                        arr.splice(i + 1, 1);
                        ops.splice(i , 1);

                    }
                    else if(ops[i] == "-"){
                        arr[i] = parseInt(arr[i]) - parseInt(arr[i+1]);
                        arr.splice(i + 1, 1);
                        ops.splice(i, 1);

                    }
                }
            }
        }
        printOutput(arr);
    }else{
        printOutput("ERROR");
    }
}

var operator = document.getElementsByClassName("operation");
for(var i = 0; i < operator.length ; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            setHistory("");
            printOutput("");
        }else if(this.id == "clear each"){
            var output = getOutput();
            output = output.slice(0, output.length-1);
            printOutput(output);
        }
        else if(this.id == "equal"){
            setHistory(getOutput());
            calculate(getOutput());
        }else if(this.id == "%"){
            var output = parseInt(getOutput());
            printOutput(output / 100);
        }else{
            var output = getOutput();
            output += this.id;
            printOutput(output)
        }
    });
}

var button = document.getElementsByClassName("button");
for(var i = 0; i <button.length ; i++){
    button[i].addEventListener('click', function(){
        var output = getOutput();
        if(output == ""){
            printOutput(this.id);
        }else{
            output += this.id;
            printOutput(output);
        }
    });
}