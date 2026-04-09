import Card from "../../components/Card/Card.js";
function Home() {
  let popularMovies = [{
    titulo: 'F1',
    descripcion: 'Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.',
    imagen: 'https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg',
  },
  {
    titulo: 'I Know What You Did Last Summer',
    descripcion: 'When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and theyre forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge.',
    imagen: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg",
  },
  {
    titulo: 'Superman',
    descripcion: 'Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.',
    imagen: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
  },
  {
    titulo: 'The Thursday Murder Club',
    descripcion: 'A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper.',
    imagen: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg",
  },
  ];

  return (
    <div>
      <h2 className="alert alert-primary">Popular movies this week</h2>
      <section className="row cards" id="movies">
        {popularMovies.map((unaPelicula, i) =>(
        <Card
          key={i}
          titulo={unaPelicula.titulo}
          imagen={unaPelicula.imagen}
          descripcion={unaPelicula.descripcion}
        />
     ))}
      </section>


      <h2 className="alert alert-warning">Popular TV shows this week</h2>
      <section className="row cards" id="tv-show">
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
      </section>
      <h2 className="alert alert-warning">TV shows airing today</h2>
      <section className="row cards" id="on-air-today">
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
        <Card titulo='F1'
          descripcion='Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.'
          imagen='https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg' />
      </section>

    </div >
  );
}

export default Home;
