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
            {
              // email do usuario
            }
            { userData }
          </span>
          {
            // valor das despesas com total certeza irei nmodificar
          }
          <span data-testid="total-field">  0 </span>
          {
            // valor de qual Moeda estamos olhando
          }
          <span data-testid="header-currency-field"> BRL</span>
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
