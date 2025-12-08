import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h3>Pages</h3>
<Link href={'/product'} >
        <h1> product list</h1>
  
</Link>   
<Link href={'/product-details'} >
        <h1> product list</h1>
  
</Link>   

 </div>
  );
}
