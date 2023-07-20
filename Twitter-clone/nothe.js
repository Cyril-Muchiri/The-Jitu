


  const resultDiv = document.getElementById('result');


  document.getElementById('comment').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
       
        resultDiv.innerHTML = '';

       
        data.forEach(comment => {
          const commentDiv = document.createElement('div');
          commentDiv.textContent = `Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`;
          resultDiv.appendChild(commentDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  });


  
  comment.addEventListener('click',function(){
    fetch( `https://jsonplaceholder.typicode.com/comments?userId=${userId}`)
    .then( response=>response.json()
    .then(comments=>{

      commentDiv.innerHTML='';
      comments.forEach(comment=>{
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const commentBody = document.createElement('div');
        commentBody.textContent = post.body;
        commentBody.style.fontSize="12px";
        commentItem.appendChild(commentBody);

      })
    //   const commentDiv=document.createElement('div');
    //   commentDiv.textContent = comments.body;

       commentsResult.appendChild(commentItem);

    }))
  })