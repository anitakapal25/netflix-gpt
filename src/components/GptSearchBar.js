import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector,useDispatch } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
      movie+
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
      )
      const json = await data.json()
      return json.results
  } 

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)
    //Make an API call to GPT api and get movie results
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+" only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,don,golmaal"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){

    }
    console.log(gptResults.choices?.[0]?.message?.content)

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    console.log(gptMovies);//[Gadar,Chupke chupke]
    //For each movie search in TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    //the above line return promises array[] 
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText}
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}>
              {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar