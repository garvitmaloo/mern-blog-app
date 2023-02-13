import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";

export default function AdminHomePage({ data }) {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h3 className="mb-4">Your Posts</h3>
        <CardsGrid isAdmin={true} posts={data.currentPage} />
        <PaginationButtons guide={data} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let pageNumber = 1;

  if (context.query.page) {
    pageNumber = context.query.page;
  }

  const { data } = await axios.get(
    `http://localhost:4000/api/admin/home?page=${pageNumber}`
  );

  return {
    props: {
      data,
    },
  };
}
