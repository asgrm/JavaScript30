const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const prom = fetch(endpoint)
  .then(blob => blob.json())
  .then(result => cities.push(...result));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function findMatches(wordToMach, cities) {
  return cities.filter(item => {
    const regex = new RegExp(wordToMach, 'gi');
    return item.city.match(regex) || item.state.match(regex);
  })
}
function displayMatches(){
  const matches = findMatches(this.value, cities);

  const html = matches.map(item => {
    const hlregex = new RegExp(this.value, 'gi');
    const cityName =  item.city.replace(hlregex, `<span class="hl">${this.value}</span>`);
    const stateName =  item.state.replace(hlregex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(item.population)}</span>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

search.addEventListener('keyup', displayMatches);