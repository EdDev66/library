const table = document.querySelector('.list');
const btn = document.querySelector('.adder');
const addBtn = document.querySelector('.insert');
const content = document.querySelector('.content');
const form = document.querySelector('.bookAdder');
const check = document.querySelector('.check');
let i = 1;

const fields = form.getElementsByTagName("input");
let myLibrary = [];

btn.addEventListener('click', addBook);
addBtn.addEventListener('click', function(e){
    e.preventDefault();    

    let isChecked = check.checked ? 'Yes' : 'No';

    for(let i = 0; i<fields.length-1; i++){
        let toAdd = fields[i].value;
        myLibrary.push(toAdd);
    }
    myLibrary.push(isChecked);

    render();
    
    let readValue = document.querySelectorAll('.toggleRead');
    let isRead = false;
    for(let i = 0; i<readValue.length; i++){
    readValue[i].addEventListener('click', function() {
        readValue[i].style.cursor = 'pointer';
        if(isRead){
            readValue[i].innerText = 'Yes';
            readValue[i].style.color = 'green';
            isRead = false;
        } else {
            readValue[i].innerText = 'No';
            readValue[i].style.color = 'red';
            isRead = true;
        }
    })
}
})



function addBook() {

    // Add inputs

    form.classList.remove('hidden');

}

function render() {
    let newCol = document.createElement('tr');

    myLibrary.forEach(el => {
        let rows = document.createElement('td');
        rows.innerHTML = el;
        newCol.appendChild(rows);
        if(el ==  'Yes' || el == 'No'){
            rows.classList.add('toggleRead');
        }
    })

    myLibrary = [];
    

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delBtn');
    let row = document.createElement('td');
    row.appendChild(delBtn);

    newCol.appendChild(row);
   
    table.appendChild(newCol);
    i++;

    delBtn.addEventListener('click', function(){
        newCol.parentNode.removeChild(newCol);
    })

}
