import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  return <p>Showing product {router.query.id}</p>;
};

export default Product;
