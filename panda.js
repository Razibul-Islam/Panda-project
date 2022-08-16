const h2Element = document.getElementsByTagName('h2');

for (let i = 0; i < h2Element.length; i++) {
    h2Element[i].style.color = 'lightblue';
}
document.getElementById('bag').style.backgroundColor = 'tomato';

const cardClass = document.getElementsByClassName('card');

for(let i = 0; i < cardClass.length; i++){
    cardClass[i].style.borderRadius = '30px'
}

let count = 0;
function eventH(){
    console.log(count++);
}

const btns = document. getElementsByClassName("btn");
for (var i = 0; i < btns. length; i++) {
btns[i]. addEventListener("click", function (event) {
    // console.log('hello');
    event.target.style.display = 'none'
});
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const inputValue = event.target.value;
    const btn = document.getElementById('Disable-Btn');
    if(inputValue == 'email'){
        btn.removeAttribute('disabled')
    }else{
        btn.setAttribute('disabled', true)
    }
})