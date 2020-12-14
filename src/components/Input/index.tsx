import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, Field } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ label, name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} hasError={!!error}>
      <header>
        <label>{label}</label>
        {error && <p className="error">{error}</p>}
      </header>

      <Field isFilled={isFilled} isFocused={isFocused} hasError={!!error}>
        {Icon && <Icon size={24} />}

        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name={name}
          {...rest}
        />
      </Field>
    </Container>
  );
};

export default Input;
