const myName = document.querySelector('#name');
const place = document.querySelector('#place');
const text = document.querySelector('#review__text');

const button = document.querySelector('#addButton');

let storage = localStorage;


addButton.addEventListener('click', function(){
    storage.data=JSON.stringify({
        myName: myName.value,
        place: place.value,
        text: text.value
    });
    console.log(localStorage.data);
});


// load.addEventListener('click', function() {
//     const data = JSON.parse(storage.data || '{}');
//     review__item.value = data.myName || '';
//     review__item.value = place.bday || '';
//     review__item.value = text.about || '';
// });
