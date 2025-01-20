
import FilterMovie from '@/components/FilterMovie'
import { recent } from '@/services/services'
import { useContext } from 'react'
import { DisplayContext } from '../layout'
import Recentmovie from './components/Recentmovie'

const page = async () => {
    const response= await recent();
  return (
    <Recentmovie response={response}/>
  )
}

export default page