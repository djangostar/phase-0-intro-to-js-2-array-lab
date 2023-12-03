// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  return cats.push(name);
};

const destructivelyPrependCat = (name) => {
  return cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
  return cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  return cats.shift();
};

const appendCat = (name) => {
  const newCats = [...cats, name];
  return newCats;
};

const prependCat = (name) => {
  const newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = () => {
  return cats.slice(0, -1);
};

const removeFirstCat = () => {
  return cats.slice(1);
};
