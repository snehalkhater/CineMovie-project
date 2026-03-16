import { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "../../components/ShowMovies";

function ShowMovies(){

const [movies,setMovies] = useState([])

const getMovies = async ()=>{

const response = await axios.get("http://localhost:8081/get-movie")

if(response.data.success){
setMovies(response.data.data)
}

}

useEffect(()=>{
getMovies()
},[])

return(

<div className="p-10 grid grid-cols-4 gap-6">

{movies.map((movie)=>(
<ShowCard key={movie._id} movie={movie}/>
))}

</div>

)

}

export default ShowMovies