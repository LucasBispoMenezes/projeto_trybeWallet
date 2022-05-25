import React from 'react';
import propTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expense, index } = this.props;
    const { currency, exchangeRates } = expense;
    let { value } = expense;
    value = +value;
    let cambio = exchangeRates[currency].ask;
    cambio = Number(cambio);
    return (
      <tr key={ index }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{Number(expense.value).toFixed(2)}</td>
        <td>{exchangeRates[currency].name}</td>
        {
        // dica do kelder
        }
        <td>{ cambio.toFixed(2) }</td>
        <td>{(cambio * value).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
          >
            Editar
          </button>
          <button
            type="button"
            data-testid="delete-btn"
          >
            Excluir
          </button>
        </td>
      </tr>);
  }
}

export default Table;
Table.propTypes = {
  index: propTypes.number.isRequired,
  expense: propTypes.arrayOf().isRequired,
};
