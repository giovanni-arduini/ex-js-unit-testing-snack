function createSlug(string) {
  return string.toLowerCase();
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("GIANNI")).toBe("gianni");
  expect(createSlug("gigi")).toBe("gigi");
  expect(createSlug("caMel")).toBe("camel");
});
