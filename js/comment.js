function commentFun() {
  const commentUrl = "https://jsonplaceholder.typicode.com/comments";

  fetch(commentUrl)
    .then((res) => res.json())
    .then((comments) => displayFun(comments));
}

function displayFun(comments) {
  const commentContainer = document.getElementById("comments-container");
  for (const comment of comments) {
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("comment-design");
    commentsDiv.innerHTML = `
      <h1>User ID : ${comment.id}</h1>
      <h2>User Name : ${comment.name}</h2>
      <h3>Email Address : ${comment.email}</h3>
      <p>Description : ${comment.body}</p>
      `;
    console.log(comment);
    commentContainer.appendChild(commentsDiv);
  }
}

commentFun();
