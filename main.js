const bgHolders = Array.from(document.querySelectorAll('.bg-holder'));

for (let i = 0; i < bgHolders.length; i++) {
  bgHolders[i].style.backgroundImage = `url('./assets/prj_${i+1}.jpg')`;
}
