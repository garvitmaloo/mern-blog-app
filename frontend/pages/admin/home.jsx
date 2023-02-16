import CardsGrid from "@project/components/CardsGrid/CardsGrid";
import { AdminContext } from "@project/context/admin-auth";
import axios from "axios";
import { useContext, useEffect } from "react";
import Router from "next/router";

import Navbar from "../../components/Navbar/Navbar";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";

export default function AdminHomePage({ data }) {
  const adminCtx = useContext(AdminContext);
  const isAdminAuth = adminCtx.admin.isAdmin;

  useEffect(() => {
    if (!isAdminAuth) {
      Router.replace("http://localhost:3000/admin/login");
    }
  }, [isAdminAuth]);

  if (!isAdminAuth) {
    return null;
  }

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h3 className="mb-4">Your Posts</h3>
        <CardsGrid isAdmin={true} posts={data.currentPage} />
        {(data.nextPage || data.previousPage) && (
          <PaginationButtons guide={data} />
        )}
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
