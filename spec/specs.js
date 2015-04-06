describe('pigLatin', function() {
    it('will return the word with "ay" added to the end if it begins with a vowel', function() {
        expect(pigLatin('above')).to.equal('aboveay');
    });

    it('is false if the first letter in the word is a consonant', function() {
        expect(pigLatin('babove')).to.equal('abovebay');
    });

    it('will return the word with "ay" added to the end', function() {
        expect(pigLatin('above')).to.equal('aboveay');
    });

    it('will return the word with the first constant attached to the end plus ay', function() {
        expect(pigLatin('babove')).to.equal('abovebay');
    });

    it('will return two words converted to pig latin', function() {
        expect(pigLatin('holy cow')).to.equal('olyhay owcay');
    });
});
