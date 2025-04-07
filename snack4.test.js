function createSlug(string) {
  return string.split(" ").join("-");
}

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Ciao mamma")).toBe("Ciao-mamma");
  expect(createSlug("Ciao mam-ma")).toBe("Ciao-mam-ma");
  expect(createSlug("Ciao mamma guarda come mi diverto")).toBe(
    "Ciao-mamma-guarda-come-mi-diverto"
  );
});
