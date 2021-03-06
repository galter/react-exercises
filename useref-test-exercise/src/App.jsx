import { useEffect, useRef, useCallback } from 'react';

import Input from './components/Input';

function App() {
  const nameInputRef = useRef(null);
  const acceptTermsRef = useRef({ value: false });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    //nameInputRef.current?.focus();
    console.log(nameInputRef.current?.value );
    console.log(acceptTermsRef.current.value );
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  return (
    <div className="App">
    <form onSubmit={handleSubmit}> 
      <input type="text" placeholder="Digite seu nome" ref={nameInputRef} />

      {/* <Input name="name" label="Nome Completo" ref={nameInputRef} /> */}

      <button type="button" onClick={handleAcceptTerms}>
        Aceitar Termos
      </button>

      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default App;
