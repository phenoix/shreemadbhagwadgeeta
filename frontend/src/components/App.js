import React from 'react';
import Navbar from './Nav/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GeetaSaar from './Geeta/GeetaSaar';
import Chapters from './Geeta/Chapters';
import CreateChapterForm from './Geeta/Form/CreateChapterForm'
import CreateVerseForm from './Geeta/Form/CreateVerseForm';
import Verses from './Geeta/Verses';
import VerseDetails from './Geeta/VerseDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={GeetaSaar} />
          <Route exact path="/chapters" component={Chapters} />
          <Route exact path="/chapters/create" component={CreateChapterForm} />
          <Route exact path="/verse/create" component={CreateVerseForm} />
          <Route exact path="/chapters/:id"  component={Verses} />
          <Route exact path="/verses/:id" component={VerseDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
