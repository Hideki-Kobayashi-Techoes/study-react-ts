import prisma from './prisma'

// prismaからレビューを読了日(read)降順で取得
export async function getAllReviews() {
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc'
    }
  })
}

// Google Books APIから書籍を検索
export async function getBooksByKeyword(keyword: string) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`);
  const result = await res.json();
  const books = result.items.map(item => createBook(item));
  return books;
}

// bookオブジェクトを作る関数
export async function createBook(book) {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : '/vercel.svg'
  }
}