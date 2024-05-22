import MoviesCarousel from "@/components/MoviesCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

// working url: http://localhost:3000/genre/80?genre=Crime

async function genrePage({ params: { id }, searchParams: { genre } }: Props) {
    console.log(`ID: ${id} and Genre: ${genre}`)
    const movies = await getDiscoverMovies(id);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>

                {/* <AIAzureSuggestion term={genre} /> */}
                {/* <AISuggestion term={genre} /> */}

                <MoviesCarousel title={`Genre`} movies={movies} isVertical />
            </div>
        </div>
    );
}

export default genrePage