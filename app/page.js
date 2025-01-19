import { Main } from "@/components/Main";
import { fetchinput, fetchMovies } from "@/services/services";

export default async function Home() {
  const data = await fetchMovies();
  return (
    <>
      <Main movies={data?.results} />
    </>
  );
}
