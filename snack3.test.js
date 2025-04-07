function average([...nums]) {
  return nums.reduce((acc, value) => acc + value, 0);
}

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3])).toBe(6);
  expect(average([-1, -3, -9])).toBe(-13);
  expect(average([1, -2, 3])).toBe(2);
});
