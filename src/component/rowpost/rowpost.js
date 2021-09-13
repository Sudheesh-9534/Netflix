import YouTube from 'react-youtube'
import axios from '../../axios'
import './rowpost.css'
import { useEffect, useState } from 'react'
import {imageUrl, API_Key} from '../../constants/constant'


function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then((response=>{
            console.log(response.data)
            setmovies(response.data.results)
        }))
    }, [])
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    };
    const handlemovie=(id)=>{
            console.log(id)
            axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
             if (response.data.results.length!==0){
                 setUrlId(response.data.results[0])
             }else{
                 console.log('Array empty')
             }
            })
    }
    return (
        <div className='row'>            
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>  
                    <div className="posterList" onClick={()=>handlemovie(obj.id)}>
                        <img  className={props.isSmall ?'smallposter':'poster'} alt = 'poster' src={`${imageUrl+obj.backdrop_path }`} />
                        <div className="posterDiscription">{obj.original_title}</div>
                   <div className='posterName'>{obj.overview}</div>
                    </div>
                )}
        
            </div>
          
        { urlId && <YouTube opts={opts} videoId={urlId.key }/>}
        </div>
    )
}

export default Rowpost
