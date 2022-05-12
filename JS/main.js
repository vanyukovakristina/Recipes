

 const post = document.querySelector('.post');
 const likeEl = document.querySelector('.click-like');

likeEl.innerText = ' ';
 let counter = 0;
  post.addEventListener('click',()=> {
    counter++;
    if(counter===1) likeEl.innerText = counter;
    else likeEl.innerText =  counter;

  });

