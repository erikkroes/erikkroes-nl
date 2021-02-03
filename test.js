const cards = document.querySelectorAll('article');

cards.forEach(card => 
  const link = card.querySelector('a');
  const target = link.href;
  
  card.addEventListener('click', () => {
    window.location.href = target;
  })             
);

document.body.className = 'no-block';
console.log(document.body.className);