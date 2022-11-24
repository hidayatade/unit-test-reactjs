function Penjumlahan(angka1, angka2) {
  return angka1 + angka2;
};

function Perkalian(angka1, angka2) {
  return angka1 * angka2
};

test("BasicTest", () => {
  expect(Boolean).toBe(Boolean);
});

test("Penjumlahan", () => {
  expect(5 + 4).toBe(9);
  expect(10 + 12).toBe(22);
});

test("Penjumlahan", () => {
  expect(Penjumlahan(20, 10)).toBe(30);
  expect(Penjumlahan(30, 5)).toBe(35);
});

test("Perkalian", () => {
  expect(Perkalian(2, 4)).toBe(8);
});