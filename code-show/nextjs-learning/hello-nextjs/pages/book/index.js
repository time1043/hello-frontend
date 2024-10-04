import Link from "next/link";

function BookList({ booksCount = 50, reviewsCount = 4 }) {
  // const booksCount = 50;
  // const reviewsCount = 4;
  const books = [];

  for (let i = 1; i <= booksCount; i++) {
    books.push(
      <div key={i}>
        <h3>
          <Link href={`/book/${i}`}>Book {i}</Link>
        </h3>
        {[...Array(reviewsCount)].map((_, j) => (
          <h5 key={j}>
            <Link href={`/book/${i}/review/${j + 1}`}>Review {j + 1}</Link>
          </h5>
        ))}
      </div>
    );
  }

  return (
    <>
      <Link href="/">Back to Home</Link>

      <h1>Book Page</h1>
      {books}
    </>
  );
}

export default BookList;
