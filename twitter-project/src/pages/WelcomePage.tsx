import Welcome from "../components/WelcomePage/welcome";
import SignIn from "../components/WelcomePage/signIn";

function WelcomePage() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <Welcome />
          <SignIn />
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
