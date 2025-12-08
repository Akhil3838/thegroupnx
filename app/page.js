import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <h2 style={{ marginBottom: "25px" }}>📄 Pages</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {/* Card 1 */}
        <Link 
          href="/products"
          style={{
            flex: 1,
            minWidth: "260px",
            padding: "20px",
            borderRadius: "12px",
            background: "#f8f9fa",
            textDecoration: "none",
            border: "1px solid #e5e5e5",
            transition: "0.3s",
            color: "#000",
            cursor: "pointer"
          }}
        >
          <h4 style={{ marginBottom: "8px" }}>Product List</h4>
          <p style={{ opacity: 0.6 }}>View all available products</p>
        </Link>

        {/* Card 2 */}
        <Link 
          href="/product-details"
          style={{
            flex: 1,
            minWidth: "260px",
            padding: "20px",
            borderRadius: "12px",
            background: "#f8f9fa",
            textDecoration: "none",
            border: "1px solid #e5e5e5",
            transition: "0.3s",
            color: "#000",
            cursor: "pointer"
          }}
        >
          <h4 style={{ marginBottom: "8px" }}>Product Details</h4>
          <p style={{ opacity: 0.6 }}>See detailed product info</p>
        </Link>
      </div>
    </div>
  );
}
