import { useRouter } from "next/router";

import CardsGrid from "../../components/CardsGrid/CardsGrid";

export default function SearchResultPage() {
  const router = useRouter();

  const c = router.query.category;
  const category = c && c.split("-").join(" ");

  return (
    <div className={`container py-4 px-0`}>
      <h1 className="mb-5">Showing blogs in {category} category</h1>

      <CardsGrid />
    </div>
  );
}
