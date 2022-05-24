import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <main className="container">
        <header className="header-waller">
          <span data-testid="email-field">
            { userData }
          </span>
        </header>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  userData: state.user.email,
});
export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  userData: propTypes.string.isRequired,
};
