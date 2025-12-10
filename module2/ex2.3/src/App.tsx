const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 



  const PageTitle = (props: PageTitle )=>{
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }

 const Cinema = (props: Cinema)=>{
    return(
      <div>
        <p>{props.name}</p>

        <table>

          <thead>
            <tr>
              <th>Movie</th>
              <th>Director</th>
            </tr>
          </thead>

          <tbody>
            {props.movies.map((movie : Movie)=>(

              <tr>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
              </tr>

            ))}
          </tbody>
        </table>
        
      </div>
    )
  }

  interface Cinema{
    name : string
    movies : Movie[]
  }
  interface Movie{
    director : string
    title : string
  }
  interface PageTitle{
    title : string
  }

   return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
}
export default App;