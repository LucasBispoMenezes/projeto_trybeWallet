import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchApi, fetchApiExpense, deleteExpenseToState } from '../actions';
import Table from '../Component/ThTabela';
// import Loading from './Loading';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: 'as',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatchKeys } = this.props;
    dispatchKeys(fetchApi());
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

     handleApiClick = () => {
       const { dispatchExpense } = this.props;
       dispatchExpense(this.state);
       this.setState({
         value: 0.00,
       });
       this.setState((prevState) => ({
         id: prevState.id + 1,
       }));
     };

     currencyConverter = () => {
       const { valorReduce } = this.props;
       return valorReduce.reduce((acc, cur) => acc + (cur.value
        * cur.exchangeRates[cur.currency].ask), 0).toFixed(2);
     }

     handleClickDelete = ({ target: { id } }) => {
       const { valorReduce, deleteExpense } = this.props;
       const itenDelete = valorReduce.filter((iten) => iten.id !== +id);
       deleteExpense(itenDelete);
     }

     render() {
       const { value } = this.state;
       const { userData,
         keysCurrencies,
         valorReduce,
         /* load */ } = this.props;
       return (
         <main className="container">
           <header className="header-waller">
             <span data-testid="email-field">
               { `Email: ${userData}` }
             </span>
             { }
             <span data-testid="total-field">
               { this.currencyConverter()}
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
                 name="value"
                 id="valueInput"
                 onChange={ this.handleChange }
                 value={ value }
               />
             </label>
             <label htmlFor="descriptionInput">
               descrição:
               <input
                 type="text"
                 data-testid="description-input"
                 className="descriptionInput"
                 id="descriptionInput"
                 name="description"
                 onChange={ this.handleChange }
               />
             </label>
             <label htmlFor="currencies">
               Moeda:
               <select id="currencies" name="currency" onChange={ this.handleChange }>
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
                 name="method"
                 onChange={ this.handleChange }
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
                 onChange={ this.handleChange }
               >
                 <option value="Alimentação">Alimentação</option>
                 <option value="Lazer">Lazer</option>
                 <option value="Trabalho">Trabalho</option>
                 <option value="Transporte">Transporte</option>
                 <option value="Saúde">Saúde</option>
               </select>
             </label>
             <button
               type="button"
               onClick={ this.handleApiClick }
             >
               Adicionar despesa
             </button>
           </form>
           <table>
             <tr>
               <th>Descrição</th>
               <th>Tag</th>
               <th>Método de pagamento</th>
               <th>Valor</th>
               <th>Moeda</th>
               <th>Câmbio utilizado</th>
               <th>Valor convertido</th>
               <th>Moeda de conversão</th>
               <th>Editar/Excluir</th>
             </tr>
             {valorReduce.map((expense) => (<Table
               expense={ expense }
               index={ expense.id }
               key={ expense.id }
               handleClickDelete={ this.handleClickDelete }
             />))}
           </table>
         </main>
       );
     }
}
const mapStateToProps = (state) => ({
  valorReduce: state.wallet.expenses,
  keysCurrencies: state.wallet.currencies,
  userData: state.user.email,
  load: state.wallet.loading,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchKeys: (func) => dispatch(func),
  dispatchExpense: (state) => dispatch(fetchApiExpense(state)),
  deleteExpense: (state) => dispatch(deleteExpenseToState(state)),
});

Wallet.propTypes = {
  dispatchExpense: propTypes.func.isRequired,
  userData: propTypes.string.isRequired,
  dispatchKeys: propTypes.func.isRequired,
  keysCurrencies: propTypes.arrayOf(propTypes.array).isRequired,
  // load: propTypes.bool.isRequired,
  valorReduce: propTypes.arrayOf().isRequired,
  deleteExpense: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
