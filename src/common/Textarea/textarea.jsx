import React, { Component } from 'react';
import { Field } from 'formik';
// import cx from 'classnames';
import styles from './text-area.css';

class CustomInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });
  }

  render() {
    const {
      type,
      field,
      maxLength,
      form: { touched, errors, submitCount },
      // label,
      customClass
    } = this.props;
    let fieldClass = `form-control form-control-danger ${styles.inputField}`;
    if (customClass) {
      fieldClass = `${fieldClass} ${customClass}`;
    }
    // console.log('field.value', field.value);
    const inputContainerClass = this.state.focused || (field.value && field.value !== '') ? styles.inputFocused : styles.inputBlur;
    // const labelClass = this.state.focused || (field.value && field.value !== '') ? styles.labelFocused : styles.labelBlur;
    return (
      <div className={inputContainerClass}>
        {/* <label className={cx(labelClass, styles.customLabel)}>
          {label}
        </label> */}
        <textarea
          {...field}
          type={type}
          value={field.value || ''}
          maxLength={maxLength}
          className={fieldClass}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {((submitCount > 0)
        || (touched[field.name]
        && errors[field.name]))
          && (
            <div className="error">
              {errors[field.name]}
            </div>
          )
        }
      </div>
    );
  }
}

const TextArea = (props) => {
  const {
    name,
    label,
    maxLength,
    type
  } = props;
  return (
    <div>
      <Field
        name={name}
        maxLength={maxLength}
        component={CustomInputComponent}
        label={label}
        type={type}
      />
    </div>
  );
};

export default TextArea;
