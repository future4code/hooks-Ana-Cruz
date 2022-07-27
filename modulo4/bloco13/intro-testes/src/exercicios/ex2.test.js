import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'saias'", () => {
    const ehPalindromo = checaPalindromo("saias");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna false para 'terra'", () => {
    const ehPalindromo = checaPalindromo("terra");
    expect(ehPalindromo).toEqual(false);
  });

  //Ana é palindromo se ignorar a letra maiuscula
  it("retorna true para 'Ana'", () => {
    const ehPalindromo = checaPalindromo("Ana");
    expect(ehPalindromo).toEqual(true);
  });
});
