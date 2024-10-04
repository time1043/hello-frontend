import { useRouter } from "next/router";

// http://localhost:3000/docs  // 404  // Solution: [[...params]].js

function Docs() {
  // http://localhost:3000/docs/feature1/concept222
  const router = useRouter();
  const { params = [] } = router.query; // 初始化空数组 防止因为预渲染的undefined
  console.log(params); // ['feature1', 'concept222']

  if (params.length === 2) {
    // http://localhost:3000/docs/feature1/concept222
    return (
      <>
        <h3>
          Feature: {params[0]}, Concept: {params[1]}
        </h3>
        <p> bala bala bala </p>
      </>
    );
  } else if (params.length === 1) {
    // http://localhost:3000/docs/feature1
    return (
      <>
        <h3>Feature: {params[0]}</h3>
        <p> bala bala </p>
      </>
    );
  }

  // http://localhost:3000/docs/feature1/concept222/other
  return (
    <div>
      <h1>Welcome to the Docs!</h1>
    </div>
  );
}

export default Docs;
