import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Navbar } from './components/Navbar';
import { CompanyItem } from './components/CompanyItem';

const navItems = [
  {
    label: 'BMW',
    link: '/bmw'
  },
  {
    label: 'Ford',
    link: '/ford'
  },
  {
    label: 'Porsche',
    link: '/porsche'
  },
  {
    label: 'Skoda',
    link: '/skoda'
  }
];

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar navItems={navItems} />
          <Container>
            <Row>
              <Col xs={12}>
                <Switch>
                  <Redirect exact from='/' to='/BMW' />
                  <Route path='/:companyName' component={CompanyItem} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
    </div>
  );
}

export default App;