import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para [1, 2, 1, 1]", () => {
        const ehDuplicado = checaItensDuplicados([1, 2, 1, 1]);
        expect(ehDuplicado).toEqual(true);
    });

    it("retorna false para []", () => {
        const ehDuplicado = checaItensDuplicados([]);
        expect(ehDuplicado).toEqual(false);
    });

    it("retorna true para ['a', 'b', 'c', 'c']", () => {
        const ehDuplicado = checaItensDuplicados(["maçã", "cereja", "maçã"]);
        expect(ehDuplicado).toEqual(true);
    });

    it("retorna true para [1]", () => {
        const ehDuplicado = checaItensDuplicados([1]);
        expect(ehDuplicado).toEqual(false);
    });

});
