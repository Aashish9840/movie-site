import FilterMovie from '@/components/FilterMovie'
import { popularMovie } from '@/services/services'
import Image from 'next/image'
import React, { useContext } from 'react'
import GenreMovie from './components/GenreMovie'

const page = async () => {
    const response= await popularMovie()

   
  return (
 <GenreMovie response={response}/>
  )
}

export default page