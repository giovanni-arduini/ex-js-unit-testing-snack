function createSlug(title) {
  const specialChars = "@(~!@#$%^&*_-+=`|(){}[]:;/'<>,.?/)\"";
  const containsSpecialChars = title
    .split("")
    .some((char) => specialChars.includes(char));
  console.log(...title);

  if (title.trim().length < 1 || containsSpecialChars) {
    throw new Error("Titolo vuoto o non valido");
  }
  return title;
}

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => {
    createSlug("");
  }).toThrow("Titolo vuoto o non valido");
  expect(() => {
    createSlug(" ");
  }).toThrow("Titolo vuoto o non valido");
  expect(() => {
    createSlug("!(");
  }).toThrow("Titolo vuoto o non valido");
});
