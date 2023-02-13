import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";

export default function AdminHomePage({ data }) {
  console.log(data);
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h3 className="mb-4">Your Posts</h3>
        <CardsGrid isAdmin={true} posts={data.currentPage} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    "http://localhost:4000/api/admin/home?page=1"
  );

  return {
    props: {
      data,
    },
  };
}
