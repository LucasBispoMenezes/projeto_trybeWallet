import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchApi } from '../actions';
import Loading from './Loading';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      valueInput: '',
      descriptionInput: '',
      currencies: '',
      pay: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { DispatchKeys } = this.props;
    DispatchKeys(fetchApi());
  }

  handleClick = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  /*   fetchApiClick = async () => {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const data = await response.json();
    const moedaValue = Object.values(data);
    this.setState({
      currencie: moedaValue,
    }, () => {
      const { currencie, currencies } = this.state;
      const apiValueFilted = currencie.find((currency) => currency.code === currencies);
      const value = apiValueFilted.ask;
      const value1 = +value;
      console.log(value1.toFixed(2));
    });
  } */

  render() {
    const { userData, keysCurrencies, load } = this.props;
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
              name="valueInput"
              id="valueInput"
              onChange={ this.handleClick }
            />
          </label>
          <label htmlFor="descriptionInput">
            descrição:
            <input
              type="text"
              data-testid="description-input"
              className="descriptionInput"
              id="descriptionInput"
              name="descriptionInput"
              onChange={ this.handleClick }
            />
          </label>
          <label htmlFor="currencies">
            Moeda:
            <select id="currencies" name="currencies" onChange={ this.handleClick }>
              {keysCurrencies.map((currency) => (
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
            <select
              id="pay"
              data-testid="method-input"
              name=" pay"
              onChange={ this.handleClick }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleClick }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.fetchApiClick }>Adicionar Dispesas</button>
        </form>

      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  keysCurrencies: state.wallet.currencies,
  userData: state.user.email,
  load: state.wallet.loading,
});
const mapDispatchToProps = (dispatch) => ({
  DispatchKeys: (func) => dispatch(func),
});

Wallet.propTypes = {
  userData: propTypes.string.isRequired,
  DispatchKeys: propTypes.func.isRequired,
  keysCurrencies: propTypes.arrayOf(propTypes.array).isRequired,
  load: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
