const posts = [
  { title: "Giornata al lago", id: 1, slug: "giornata-lago" },
  { title: "Gita al mare", id: 2, slug: "gita-mare" },
  { title: "Compleanno", id: 3, slug: "compleanno" },
];

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`"${id}" non è un id`);
  }
  posts.forEach((post) => {
    if (
      post.id === undefined ||
      post.title === undefined ||
      post.slug === undefined
    ) {
      throw new Error(`L\'array fornito non è valido`);
    }
  });
  return posts.find((post) => post.id === id) || null;
}

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  expect(findPostById(posts, 3)).toEqual({
    title: "Compleanno",
    id: 3,
    slug: "compleanno",
  });
  expect(() => findPostById(posts, "ciao")).toThrow(`"ciao" non è un id`);
  expect(() => findPostById([98, 12], 3)).toThrow(
    `L\'array fornito non è valido`
  );
});
