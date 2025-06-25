import FilterMovie from '@/components/FilterMovie'
import { fetchMovies } from '@/services/services'
import React from 'react'
import Country from './components/Country'

const page = async () => {
  const countryfilm = await fetchMovies()
  const countryfilmscollection = countryfilm?.results

  return (
    <div>
      <Country countryfilmscollection={countryfilmscollection} />
    </div>
  )
}

export default page