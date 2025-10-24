import englishToPigLatin from "../components/Translator";

test(`translate handles empty`, () => {
  expect(englishToPigLatin(``)).toBe(``);
  expect(englishToPigLatin(` `)).toBe(``);
});

test(`translate handles numbers`, () => {});

test(`translate handles empty`, () => {
  expect(englishToPigLatin(``)).toBe(``);
});

// expect(englishToPigLatin(``)).toBe(``);

test(`translate handles vowels at beginning`, () => {
  [`a`, `e`, `i`, `o`, `u`].forEach((vowel) => {
    expect(englishToPigLatin(vowel)).toBe(`${vowel}yay`);
  });

  expect(englishToPigLatin(`apple`)).toBe(`appleyay`);
  expect(englishToPigLatin(`aeiou`)).toBe(`aeiouyay`);
  expect(englishToPigLatin(`octopus`)).toBe(`octopusyay`);
});

test(`translate handles y-words`, () => {
  expect(englishToPigLatin(`y`)).toBe(`yay`);
  expect(englishToPigLatin(`yellow`)).toBe(`ellowyay`);
  expect(englishToPigLatin(`yes`)).toBe(`esyay`);
});

test("translate handles non-vowels", () => {
  expect(englishToPigLatin(`first`)).toBe(`irstfay`);
  expect(englishToPigLatin(`flying`)).toBe(`yingflay`);
  expect(englishToPigLatin(`test`)).toBe(`esttay`);
  expect(englishToPigLatin(`tree`)).toBe(`eetray`);
  expect(englishToPigLatin(`way`)).toBe(`ayway`);
});

test(`translate handles beginning uppercase`, () => {
  expect(englishToPigLatin(`Test`)).toBe(`Esttay`);
  expect(englishToPigLatin(`Able`)).toBe(`Ableyay`);
});

test(`translate handles all uppercase`, () => {
  expect(englishToPigLatin(`TEST`)).toBe(`ESTTAY`);
  expect(englishToPigLatin(`ABLE`)).toBe(`ABLEYAY`);
});
