async function getPosts() {
  const postKey = "https://dummyjson.com/posts";

  const response = await fetch(postKey);
  const data = await response.json();

  console.log(data);
}

getPosts();
