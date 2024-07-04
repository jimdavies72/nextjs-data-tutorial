
const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Request Momoization demonstration. 
  // The fetch here loads the data into memory so the same fetch at the page level will not be called again
  // this occurs per render phase. it only applies to the GET method
  const productsResponse = await fetch("http://localhost:3001/products");
  const products = await productsResponse.json();
  console.log({ products });
  return <>{children}</>;
};

export default Layout;

