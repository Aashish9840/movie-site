import FilterMovie from '@/components/FilterMovie'
import { fetchMovies, popularMovie } from '@/services/services'

const page = async () => {
    const response= await fetchMovies()
    const receive= response.results
      const popular= await popularMovie()
    
      const allmovie=receive.concat(popular)
      const highrated=allmovie.filter((movie)=>(movie.vote_average>=7))
      console.log(highrated)
  return (
    <div className='bg-black'>

    <div className='mx-4 flex flex-col gap-4 bg-white px-4 py-8'>
        <h1 className='font-bold text-3xl'>Highest Rated Movie</h1>
        <div className='grid grid-cols-5 gap-6'>
            {
                highrated.map((movie)=>(
                   <FilterMovie movie={movie} key={movie.title}/>

                ))
            }

        </div>

    </div>
    <hr className='mx-4 h-[1px]'/>
    </div>
  )
}

export default page