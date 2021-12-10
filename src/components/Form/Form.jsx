import { Component } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";

export default class Form extends Component {
  state = { name: "", number: "" };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Vova Zelenskiy"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={this.state.name}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="text"
            name="number"
            placeholder="+38(0XX)-XXX-XX-XX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={this.state.number}
            className={s.inputTwo}
          />
        </label>
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
