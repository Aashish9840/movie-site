import FilterMovie from '@/components/FilterMovie'
import { recent } from '@/services/services'

const page = async () => {
    const response= await recent()
  return (
    <div className='bg-black'>

    <div className='mx-4 flex flex-col gap-4 bg-white px-4 py-8'>
        <h1 className='font-bold text-3xl'>Recent Release Movie</h1>
        <div className='grid grid-cols-5 gap-6'>
            {
                response.map((movie)=>(
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