const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

const clearBtn = document.querySelector('.clear-btn');
const checkBtn = document.querySelector('.check-btn');
const uncheckBtn = document.querySelector('.uncheck-btn');

function addItem(e) {
  e.preventDefault();
  const text = e.target.item.value;
  const item = {
    text, 
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const i = el.dataset.index;
  items[i].done = !items[i].done;
  localStorage.setItem('items', JSON.stringify(items));
  
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
      <label for="item${i}">${plate.text}</label>
    </li>
    `;  
  }).join('');
}

function clearPlates () {
  items = [];
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function checkPlates (check = true) {
  for (const item of items) {
    item.done = check;
    console.log('working');    
  }
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));

}

function uncheckPlates () {

}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);



clearBtn.addEventListener('click', clearPlates);
checkBtn.addEventListener('click', checkPlates);
uncheckBtn.addEventListener('click', () => checkPlates(false));

populateList(items, itemsList);
