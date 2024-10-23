import Button from "../components/button";

function HomePage() {
  const str: string = "Hello World!";

  return (
    <div>
      <h1 style={{ color: "#66fcf1" }}>{str}</h1>
      <Button />
    </div>
  );
}

export default HomePage;
