test("soma de 2 + 2 dever ser igual a 4", () => {
  const calculadora = require("../models/calculadora");
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("soma de 120 + 30 dever ser igual a 150", () => {
  const calculadora = require("../models/calculadora");
  expect(calculadora.somar(120, 30)).toBe(150);
});

test("soma de banana + 5 dever ser igual a Erro", () => {
  const calculadora = require("../models/calculadora");
  expect(calculadora.somar("banana", 5)).toBe("Erro");
});
