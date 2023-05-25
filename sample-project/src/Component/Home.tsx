function Home() {
    const name = "Home Page";
    if (name) return <p className="greenTest">{name}</p>;
    return <p className="greyTest">Hello world</p>;
  }
  export default Home;
  