import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        term: string
    }
}

async function searchPage({ params: { term } }: Props) {
    // console.log(props)
    if (!term){
        notFound()
    }

    const termToUse = decodeURI(term)

    // Api call to get the searched movies
    const searchedMovies = await getSearchedMovies(termToUse)
    // console.log(searchedMovies)
    // api call to get the popular movies
    const popularMovies = await getPopularMovies()
    
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
                <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>

                {/* AI suggestions */}

                <MoviesCarousel title="Movies" movies={searchedMovies} isVertical />
                <MoviesCarousel title="You may also like " movies={popularMovies} />
            </div>
        </div>
    )
}

export default searchPage