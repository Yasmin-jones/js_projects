let addToDoButton = document.getElementById('addToDo'); 
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    //adding styling 
    paragraph.classList.add('paragraph-styling')
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph); 
    //emptying out the input field once user clicks button 
    inputField.value = "";
    //when button is clicked it creates a paragraph containing the user input value
    //creating another event listener to produce a line through user pasted input once clicked
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    //deleting the pasted text once double clicked
    paragraph.addEventListener('dblclick', function(e){
        paragraph.removeChild(paragraph);
    })

})