alert('Hello good morning');
console.log('Hello king');

function myFunc() {
    let newItem = document.querySelector('#newItem').value;
    let list = document.createElement('ul');
    list.textContent = newItem;
    document.querySelector('.listItems').appendChild(list);
};