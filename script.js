let slider = document.querySelector('.slider');


// This defines a function called activate that responds to click events on the document. When an element with the class next is cliked, it appends the first item from a collection of elements with the class item to a slider. 


function activate(e) {
  let items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);







