function getInitials(fullName) {
  initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join(", ");
  return initials;
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Gigi Pigi")).toBe("G, P");
  expect(getInitials("Qui Gon Jinn")).toBe("Q, G, J");
});
