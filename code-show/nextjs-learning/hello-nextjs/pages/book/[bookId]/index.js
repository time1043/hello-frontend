import { useRouter } from "next/router";

function BookDetail() {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <div>
      <h1>Book Detail Page: {bookId}</h1>
    </div>
  );
}

export default BookDetail;
