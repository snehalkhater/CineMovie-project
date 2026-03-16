import axios from "axios"
import { useEffect,useState } from "react"

function ShowMovies(){

const [movies,setMovies] = useState([])

const getMovies = async ()=>{

const response = await axios.get(
`${import.meta.env.VITE_API_BASE_URL}/api/movies`
)

setMovies(response.data.data)

}

useEffect(()=>{
getMovies()
},[])

return(

<div className="grid grid-cols-4 gap-4 p-4">

{movies.map((movie)=>{

return(

<div className="bg-white shadow-lg rounded-lg p-2">

<img
src={movie.poster[0]}
className="h-60 w-full object-cover rounded"
/>

<h2 className="font-bold text-lg mt-2">
{movie.movieName}
</h2>

<p className="text-gray-500 text-sm">
{movie.category}
</p>

</div>

)

})}

</div>

)

}

export default ShowMovies