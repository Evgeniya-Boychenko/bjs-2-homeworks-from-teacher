class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }


  fix() {
    if (this._state > 0 && this._state < 100) {
      this.state = this._state * 1.5;
    }
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    }
    else if (newState > 100) {
      this._state = 100;
    }
    else {
      this._state = newState;
    }
  }

  get state() {
    return this._state
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'detective';
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }


  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const index =
      this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      const foundBook = this.books[index];
      this.books.splice(index, 1);
      return foundBook;
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");
// console.log(library)
  
 library.addBook(
  new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
  )
);

library.addBook(
  new NovelBook(
    "Герберт Уэллс",
    "Машина времени", 
    1895,             
    138 
  )
);

// console.log(library.books)


// console.log(library.books)
// console.log(library.findBookBy('releaseDate', 1919))
const book1919 = new NovelBook("Илья Ильф, Евгений Петров", "Двенадцать стульев", 1919, 32)

  library.addBook(book1919);

  // console.log(library.findBookBy('releaseDate', 1919))

const givenBook = library.giveBookByName("Машина времени")
// console.log(givenBook)

givenBook.state = 20;
// console.log(givenBook.state)

givenBook.fix();
// console.log(givenBook.state)

library.addBook(givenBook);
// console.log(library.books)








