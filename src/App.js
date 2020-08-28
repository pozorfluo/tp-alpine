import React, { useState } from 'react';
import './App.css';
// import { useSelector } from 'react-redux';
import configMachine from './machines/Configurator';
import {
  NextButton,
  Footer,
  Breadcrumbs,
  ConfigSummary,
  ConfigModal,
} from './components';
// import Container from 'react-bootstrap/Container';

function App() {
  const [cancelShow, setCancelShow] = useState(false);
  // const state = useSelector((state) => state);
  // const selected = state.config;
  // console.log('selected config : ', selected);
  return (
    <div className="App">
      <Breadcrumbs />
      <NextButton
        onClick={() => {
          configMachine.send('reset');
          setCancelShow(true);
        }}
      >
        recommencer
      </NextButton>
      <hr />
      <ConfigSummary />

      <ConfigModal
        show={cancelShow}
        title="ÊTES-VOUS SÛR ?"
        cancel="ANNULER"
        ok="RECOMMENCER"
        onHide={() => {
          configMachine.send('cancel');
          setCancelShow(false);
        }}
        onOk={() => {
          configMachine.send('confirm');
          setCancelShow(false);
        }}
      >
        Si vous modifiez le choix de version, vous devrez recommencer votre
        configuration. Vos choix seront perdus.
      </ConfigModal>
      <Footer />
    </div>
  );
}

export default App;

  /* <div>
<hr />
<button
  className="skew"
  onClick={() => {
    configMachine.send('select');
  }}
>
  <div className="unskew">select</div>
</button>
<button
  className="skew"
  onClick={() => {
    configMachine.send('next');
  }}
>
  <div className="unskew">next</div>
</button>
<button
  className="skew"
  onClick={() => {
    configMachine.send('submit');
  }}
>
  <div className="unskew">submit</div>
</button>
<button
  className="skew"
  onClick={() => {
    configMachine.send('reset');
  }}
>
  <div className="unskew">reset</div>
</button>
<button
  className="skew"
  onClick={() => {
    configMachine.send('confirm');
  }}
>
  <div className="unskew">confirm</div>
</button>
<button
  className="skew"
  onClick={() => {
    configMachine.send('cancel');
  }}
>
  <div className="unskew">cancel</div>
</button>
</div> */