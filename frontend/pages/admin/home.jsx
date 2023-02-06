import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import Navbar from "../../components/Navbar/Navbar";

export default function AdminHomePage() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h3 className="mb-4">Your Posts</h3>
        <CardsGrid />
      </div>
    </>
  );
}
