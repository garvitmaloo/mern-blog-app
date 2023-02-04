import { useRouter } from "next/router";

export default function SearchResultPage() {
  const router = useRouter();

  return <h1>Result page for {router.query.category}</h1>;
}
