import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

const Header = ({ user, cart }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {user.currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cart.hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {}
)(Header);
