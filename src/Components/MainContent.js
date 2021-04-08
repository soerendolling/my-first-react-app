import { Switch, Route } from "react-router-dom";
import "./MainContent.css";

function MainContent() {
  function Home() {
    return (
      <div className="boxLayout">
        <h1>Hello</h1>
        <img
          src="https://media.giphy.com/media/4Nq9NNTuIlMnm/giphy.gif"
          alt="Funny ggif"
        ></img>

        <p className="pBox">
          I can see it in your eyes, I can see it in your smile You're all I've
          ever wanted and my arms are open wide 'Cause you know just what to
          say, and you know just what to do And I want to tell you so much, I
          love you
        </p>
        <p className="pBox">
          I long to see the sunlight in your hair And tell you time and time
          again how much I care Sometimes I feel my heart will overflow Hello,
          I've just got to let you know
        </p>
        <p className="pBox">
          'Cause I wonder where you are and I wonder what you do Are you
          somewhere feeling lonely or is someone loving you? Tell me how to win
          your heart, for I haven't got a clue But let me start by saying, I
          love you…{" "}
        </p>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h1>THis is me</h1>
        <p>Lorem Ipum</p>
        <img
          src="https://media.giphy.com/media/3o7aD5oU9qcCuAe9SU/giphy.gif"
          alt="Funny gif"
        ></img>
      </div>
    );
  }

  function Hobbies() {
    return (
      <div>
        <h1>Some Hobbies</h1>
        <p>Lorem Ipsum</p>
      </div>
    );
  }

  function Contact() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Lorem Ipsum</p>
        <img
          src="https://media.giphy.com/media/j52whIFIDcXsNypThm/giphy.gif"
          alt="Funny ggif"
        ></img>
      </div>
    );
  }

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </main>
  );
}

export default MainContent;
