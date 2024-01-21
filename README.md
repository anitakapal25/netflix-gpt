-Header
-Routing of App
-Login
-Sign up
-Form validation
-useRef Hook
-Firebase Setup
-Deploying our app to production
-create redux store with userslice
-Implement sign out
-update profile
-bugfix:Signup user display name and profile pic update
-bugfix:if the user is not logged in Redirect /browse to login page and vice versa
-unsubscribed to the onAuthStateChanged callback

Go to tMTB and signup => create an app and get access token
Note - All APIs are called twice in development mode this is react thing it checks if there is any in error in re-rendering cycle

-created custom hook for now playing movies
-created movieSlice, update store with movies data
-planning for main container and secondary container
-fetch data for trailer video
-update store with trailor video data
-embedded the Youtube video and make it autoplay and mute
-Build secondary component(movie list,movie card)
-TMDB Image CDN URL
-GPT search
-(Feature) Multi-language in our app
-Integrate GPT APIs()
npm install --save openai

-get Open AI api key
-gpt search API call
-fetched gptMoviesSuggestions from TMDB
-created gptSlice added data
-reused movie list component to make movie suggestions container
-memoization
-added .env file

- added env to
