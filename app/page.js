import { Main } from "@/components/Main";
import { fetchMovies } from "@/services/services";

export default async function Home() {
  const data = await fetchMovies();
  console.log(data)
  return (
    <>
      <Main movies={data?.results} />
    </>
  );
}
