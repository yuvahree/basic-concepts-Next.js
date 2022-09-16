export function getAllPosts(id) {
  const postData = [
    { id: 1, title: "New Post", description: "post data from static props" },
    { id: 2, title: "second Post", description: "post data from second props" },
    { id: 3, title: "Third Post", description: "post data from third props" },
  ];

  if (id) {
    return postData.filter((post) => post.id == id);
  }

  return postData;
}
