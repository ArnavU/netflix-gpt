import MovieCard from "./MovieCard";

function MovieList({title, movies}) {
	return (
        <div className="p-2 pl-[40px]">
            <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
            <div className="flex flex-shrink-0 gap-2 overflow-x-scroll">
                {movies?.map((movie) => {
                    return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                })}
            </div>
        </div>
	);
}

export default MovieList;
