import Card from "../../components/Card/Card.js";
function Home() {
  return (
    <div>
       <h2 className="alert alert-primary">Popular movies this week</h2>
                 <section className="row cards" id="now-playing">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default Home;
