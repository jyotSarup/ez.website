import React from 'react';

//router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import { CenteredTabs, Footer, HomePage, Services, Pricing, Team, Contact } from './Components'

//styling
import { ThemeProvider } from '@material-ui/styles';
import theme from './Components/theme';
import './Assets/styles.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">

          <CenteredTabs />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/Services' component={Services} />
          <Route exact path='/Pricing' component={Pricing} />
          <Route exact path='/Team' component={Team} />
          <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
