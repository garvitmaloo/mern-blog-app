import { useRouter } from "next/router";

export default function PostDetails() {
  const router = useRouter();

  return <h1>Post Details for post ID {router.query.id}</h1>;
}
