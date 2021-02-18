import React, { useCallback, useState } from 'react';

import FormContext from './FormContext';

export default function Form({ children }) {
  const [inputs, setInputs] = useState([]);

  const registerField = useCallback((name, ref) => {
    setInputs(oldInputs => [ oldInputs, { name, ref }]);
  }, []);

  return (
    <form>
      <FormContext.Provider value={{ registerField }} >
        {children}
      </FormContext.Provider>
    </form>
  )
}
