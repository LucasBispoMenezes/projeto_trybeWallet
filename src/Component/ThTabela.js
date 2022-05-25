import React from 'react';
import propTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expense, index } = this.props;
    const { currency, exchangeRates } = expense;
    let cambio = exchangeRates[currency].ask;
    cambio = Number(cambio).toFixed(2);
    return (
      <tr key={ index }>
        <th>{expense.description}</th>
        <th>{expense.tag}</th>
        <th>{expense.method}</th>
        <th>{expense.value}</th>
        <th>{exchangeRates[currency].name}</th>
        <th>{ cambio }</th>
        <th>{(cambio * expense.value).toFixed(2)}</th>
        <th>Real</th>
        <th>
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
        </th>
      </tr>);
  }
}

export default Table;
Table.propTypes = {
  index: propTypes.number.isRequired,
  expense: propTypes.arrayOf().isRequired,
};
