export const fetchMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
    options
  );

  if (res.ok) {
    const data = await res.json();

    return data;
  }
};

export const popularMovie= async ()=>{
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const popular= await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  if (popular.ok) {
    const serverdata = await popular.json();

    return serverdata.results;
  }
}
export const recent= async ()=>{
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const popular= await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc",
    options
  );

  if (popular.ok) {
    const serverdata = await popular.json();

    return serverdata.results;
  }
}
