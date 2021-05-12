//OLD JAVASCRIPT

function showBook(title, author) {
  return {
    title: title,
    author: author,
  };
}

var book = showBook('Harry Potter', 'JK');

console.log(book);

// ES6

function getBook(title, author) {
  return {
    title,
    author,
  };
}

var book = getBook('Potter', 'JK');

console.log(book);
