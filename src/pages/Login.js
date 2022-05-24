import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import addUserToState from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValidate: false,
      passwordlValidate: false,
      email: '',
      password: '',
    };
  }

  validateEmailAndPassword = () => {
    this.validateEmail();
    this.validatePassword();
  }

  validateEmail = () => {
    const { email } = this.state;
    const validateEmail = /\S+@\S+\.\S+/;
    const emailValidate = validateEmail.test(email);
    this.setState({ emailValidate });
  }

  validatePassword = () => {
    const SIX = 6;
    const { password } = this.state;
    const passwordlValidate = password.length >= SIX;
    this.setState({ passwordlValidate });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => this.validateEmailAndPassword());
  }

  handleClick = () => {
    const { email } = this.state;
    const { history, addStateGlobal } = this.props;
    const dados = {
      email,
    };
    history.push('/carteira');
    addStateGlobal(addUserToState(dados));
  }

  render() {
    const { emailValidate, passwordlValidate } = this.state;
    return (
      <div className="container">
        {!emailValidate ? <span>Digite um email Valido</span> : <span />}
        <form className="forms">
          <label htmlFor="E-mail">
            E-mail:
            <input
              name="email"
              type="text"
              data-testid="email-input"
              id="E-mail"
              placeholder="Digite Seu E-mail"
              className="inputEmail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="Password">
            Senha:
            <input
              name="password"
              type="Password"
              id="Password"
              data-testid="password-input"
              placeholder="Digite Sua senha"
              className="inputPassword"
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="btn"
            onClick={ this.handleClick }
            type="button"
            disabled={ !passwordlValidate || !emailValidate }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispach) => ({
  addStateGlobal: (state) => dispach(state),
});

Login.propTypes = {
  addStateGlobal: propTypes.func.isRequired,
  history: propTypes.shape({ push: propTypes.func }).isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
