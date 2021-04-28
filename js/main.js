
let cardsDiv = document.querySelector('.cards');

function create_card(array){
    array.forEach(item => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        let card_img = document.createElement('img');
        card_img.src = item.image;
        card_img.alt = item.name + ' img';

        let name = document.createElement('h3');
        name.innerText = item.name;

        let price = document.createElement('p');
        price.innerText = 'price : ' + item.price + ' $';

        let button = document.createElement('button');
        button.innerText = 'Add to card';
        button.classList.add('button');

        cardDiv.appendChild(card_img);
        cardDiv.appendChild(name);
        cardDiv.appendChild(price);
        cardDiv.appendChild(button);
        cardsDiv.appendChild(cardDiv);
    });
}

create_card(products); 


let btns = document.querySelectorAll('.card button');
let counter = 0;
let savat_counter = document.querySelector('.savat-counter');
savat_counter.innerText = counter;
btns.forEach(item => {
    item.addEventListener('click', ()=>{
        if(item.innerText=='Add to card'){
            item.innerText = 'In card';
            counter++;
        } 
        else{
            item.innerText = 'Add to card';
            counter--;
        }
        item.classList.toggle('button-h');
        savat_counter.innerText = counter;  
    })
})

let modal = document.querySelector('.modal');

let savat = document.querySelector('#savat');

//modal
savat.addEventListener('click', ()=>{
    modal.classList.toggle('display-none');
})
