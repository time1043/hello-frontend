import { useRouter } from "next/router";

function BookReview() {
  const router = useRouter();
  const { bookId, reviewId } = router.query;

  return (
    <>
      <h1>
        Book ({bookId}) Review ({reviewId})
      </h1>
      <p>balabala</p>
    </>
  );
}

export default BookReview;
