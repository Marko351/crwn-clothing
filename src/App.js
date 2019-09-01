import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/userActions';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() // Get back data we store in database
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
