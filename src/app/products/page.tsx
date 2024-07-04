export const revalidate = 10;

//using default-cache allows any request to appear in any order. This is a route segment config
//export const fetchCache = "default-cache";

//import { cookies } from "next/headers";

type Product = {
  id: string,
  title: string,
  price: number,
  description: string,
}
const ProductsPage = async () => {

  //place cached requests BEFORE any No Cache requests otherwise they will
  //also not be cached....
  //const detailsResponse = await fetch("http://localhost:3001/products/1");
  //const details = await detailsResponse.json();

  // const response = await fetch("http://localhost:3001/products", {
  //   cache: "no-store",
  // });
  // const products =await response.json();


  
  // const response = await fetch("http://localhost:3001/products", {
  //   next: {
  //     revalidate: 10,
  //   }
  // });
  // const products = await response.json();


  const response = await fetch("http://localhost:3001/products")
  const products = await response.json();


  // const cookieStore = cookies();
  // cookieStore.get("theme");
  // // any fetch after a dynamic function is called (e.g. cookies) will not be cached
  // const detailsResponse = await fetch("http://localhost:3001/products/1");
  // const details = await detailsResponse.json();

  return (
    <>
      <h1>Products Page</h1>
      <ul className="space-y-4 p-4">
        {products.map((product: Product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;