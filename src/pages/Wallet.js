import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchApi } from '../actions';
import Loading from './Loading';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { userData, currencies, load } = this.props;
    return load ? <Loading /> : (
      <main className="container">
        <header className="header-waller">
          <span data-testid="email-field">
            {
              // email do usuario
            }
            { `Email: ${userData}` }
          </span>
          {
            // valor das despesas com total certeza irei nmodificar
          }
          <span data-testid="total-field">
            {' '}
            ` Despesas Totais R$0,00`
            `
            {' '}
          </span>
          {
            // valor de qual Moeda estamos olhando
          }
          <span data-testid="header-currency-field"> BRL</span>
        </header>
        <form className="forms-currente">
          <label htmlFor="valueInput">
            Valor:
            <input
              type="text"
              data-testid="value-input"
              className="valueInput"
              id="valueInput"
            />
          </label>
          <label htmlFor="descriptionInput">
            descrição:
            <input
              type="text"
              data-testid="description-input"
              className="descriptionInput"
              id="descriptionInput"
            />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select id="currencies">
              {currencies.map((currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  {currency}

                </option>))}
            </select>
          </label>
          <label htmlFor="pay">
            Pagamento:
            <select id="pay" data-testid="method-input">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" data-testid="tag-input">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  userData: state.user.email,
  load: state.wallet.loading,
});

Wallet.propTypes = {
  userData: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.array).isRequired,
  load: propTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
