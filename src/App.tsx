import React from "react";
import {
  SatistactionNote,
  AppContainer,
  FormContainer,
  Input,
} from "./components";

function App() {
  const formRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const resetForm = () => {
    formRef.current.reset();
    setResetKey((prev) => prev + 1);
  };

  const [resetKey, setResetKey] = React.useState<number>(0);

  return (
    <AppContainer>
      <FormContainer>
        <h3 className="font-bold text-center p-2">MY FORM</h3>
        <form className="flex flex-col space-y-2" ref={formRef}>
          <Input type="text" />
          <Input type="password" />
          <SatistactionNote key={resetKey} />
          <button type="button" onClick={resetForm}>
            reset
          </button>
        </form>
      </FormContainer>
    </AppContainer>
  );
}

export default App;
