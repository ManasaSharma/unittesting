import { StrengthPipe } from "./strength.pipe"

describe('strength pipe', () => {
    it('should display weak if the strength is 5', () => {
        //aarrange
        let pipe = new StrengthPipe();

        //act
        //asset
        expect(pipe.transform(5)).toEqual('5 (weak)');

    });
    it('should display strong if the strength is 10', () => {
        //aarrange
        let pipe = new StrengthPipe();

        //act
        //asset
        expect(pipe.transform(10)).toEqual('10 (strong)');

    })
})