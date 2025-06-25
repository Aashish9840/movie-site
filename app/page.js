import { Main } from "@/components/Main";
import { fetchinput, fetchMovies } from "@/services/services";

export default async function Home() {
  const data = await fetchMovies();

  return (
    <>
      <div>hello hello</div>
      <Main movies={data?.results} />
    </>
  );
}
