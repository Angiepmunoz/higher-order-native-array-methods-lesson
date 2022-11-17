const arr = [1, 2, 3, 4, 5];
const obj = {};
const arrForEach = arr.forEach((number, index) => {
  // console.log(index)
  obj[index] = number; // can create code that does not need to be an array
  // return number; // despite having a return, the function will still be undefined
});

console.log(obj);

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

// 1. Calvin & Hobbes" by Bill Watterson
// 2. Zen Pencils" by Gavin Aung Than
// 3. Nancy" by Olivia James
// 4. False Knees" by Joshua Barkman

// (1 out of 4) Calvin & Hobbes" by Bill Watterson
// (2 out of 4) Zen Pencils" by Gavin Aung Than
// (3 out of 4) Nancy" by Olivia James
// (4 out of 4) False Knees" by Joshua Barkman

function printAllComics(comics) {
  // Write your code here.
  //forEach takes three parameters - the element, the index, and the array the method is being performed on

  // We refactored the code to use forEach instead of a for loop
  comics.forEach((comic, number, array) => {
    // console.log(array)
    console.log(
      `(${number + 1} out of ${array.length}) ${comic.title} by ${comic.author}`
    );
  });
  // for (let comic of comics) {
  //   console.log(`${comic.title} by ${comic.author}`);
  // }
}

function printAllComics(comics) {
  // Write your code here.

//   we can create a function to pass as a callback but it will not be anonymous
  //   const titleAndAuthor = (comic, number, array) => {
  //     return `(${number + 1} out of ${array.length}) ${comic.title} by ${comic.author}`
  //  }
  //   const comicMap = comics.map(titleAndAuthor);

  //below is an example of map with an anonymous function
  // map takes three parameters - the element, the index, and the array the method is being performed on
  const comicMap = comics.map((comic, index, array) => {
    return `(${index + 1} out of ${array.length}) ${comic.title} by ${
      comic.author
    }`;
  });
  //   console.log(comicMap)

  // the array returned is different from the original array. When we compare reference types we get false
  //   console.log(comics === comicMap)
}

// printAllComics(comics);

function getAuthors(comics) {
  // Write your code here!
  // let result = [];
  // for(let comic of comics){
  //     result.push(comic.author);
  // }
  // return result;

  // if we do not return anything we get an array of undefined elements. As many as the length of the original array
  return comics.map((element) => {
    element.author;
  });
}

//   const result = getAuthors(comics);
//   console.log(result);

function getTitle(comic) {
  return comic.title;
}

//   const result = comics.map(getTitle);
//   console.log(result);

function isPrintComic(comic) {
  //   return comic.kind === "print"; //boolean
  //   return comic.kind; // all are truthy
  return comic.type; // undefined so falsy
}

// filter is going to return an array with all the elements that evaluate as truthy (is often a conditional)
// const result = comics.filter(isPrintComic);
// console.log(result);

function getJoshuaBarkmanComic(comic, author) {
  //   return comic.author === "Joshua Barkman"; //boolean
  return comic.author === author;
}

const filterResult = comics.filter(getJoshuaBarkmanComic);
// console.log(filterResult);

const findResult = comics.find(getJoshuaBarkmanComic);
const findWithAuthorResult = comics.find((comic) => {
  return getJoshuaBarkmanComic(comic, "Bill Watterson");
});
// console.log(findWithAuthorResult);

function isPrintComic(comic) {
  return comic.kind === "print";
}

const result = comics.find(isPrintComic);
console.log(result);
