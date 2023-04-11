// Task 1 ==================================================================
function task1(a) {
    a = +prompt('Please enter a number and we will add 5 in it.')
    const task = () => {
        console.log(a + 5); 
    }
    task();
}



// Task 2 ==================================================================
let array = ["a", "b" , "c" , "g", "h", "m" , "n", "x", "y" , "z"]

function task2(){
    function task (arr, toSearch) {
        if (arr.length === 0){
            return console.log(false); 
            
        }
        if ( toSearch === arr[0]){
            return console.log(true); 
        }
            return task(arr.slice(1), toSearch);
        
        }
        let  a = prompt('Please enter a character to search; the string contains some alphabets (Small Letters).')
        task(array, a);
    }




// Task 3 =================================================================
// function task3() {
//     let string = prompt('Please enter a string argument to use as text for new paragraph at bottom')
//     let nPara = document.createElement('p')
// nPara.innerHTML = string

// let html = "<p style='color: red;>" + string + "</p>"
// document.body.innerHTML = string;
// }
function task3(text) {
        text = prompt('Please enter a string argument to use as text for new paragraph at bottom')
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
  }

  
