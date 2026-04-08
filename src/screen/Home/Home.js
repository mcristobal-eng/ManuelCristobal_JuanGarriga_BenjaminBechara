import Card from "../../components/Card/Card.js";
function Home() {
  return (
    <div>
      <h2 className="alert alert-primary">Popular movies this week</h2>
      <section className="row cards" id="movies">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <h2 className="alert alert-primary">Movies now playing</h2>
      <section className="row cards" id="now-playing">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <h2 className="alert alert-warning">Popular TV shows this week</h2>
      <section className="row cards" id="tv-show">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <h2 className="alert alert-warning">TV shows airing today</h2>
      <section className="row cards" id="on-air-today">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

    </div>
  );
}

export default Home;
