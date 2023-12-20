// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  // appends a cat to the end of the cats array: destructively
  cats.push(name);
};

const destructivelyPrependCat = (name) => {
  // prepends a cat to the beginning of the cats array: destructively
  cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
  // removes the last cat from the cats array: destructively
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  // removes the first cat from the cats array: destructively
  cats.shift();
};

const appendCat = (name) => {
  // appends a cat to the cats array and returns a new array, leaving the cats array unchanged
  const newCats = [...cats, name];
  return newCats;
};

const prependCat = (name) => {
  // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
  const newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = () => {
  // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
  return cats.slice(0, -1);
};

const removeFirstCat = () => {
  // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
  return cats.slice(1);
};
