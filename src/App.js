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

function App() {
  // const step = useSelector((state) => state.step);
  const [cancelShow, setCancelShow] = useState(false);
  // if (step === 'reset') {setCancelShow(true);}

  return (
    <div className="App">
      <Breadcrumbs>
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
          redirect="/version"
        >
          Si vous modifiez le choix de version, vous devrez recommencer votre
          configuration. Vos choix seront perdus.
        </ConfigModal>
        <ConfigSummary>
          <NextButton
            onClick={() => {
              configMachine.send('reset');
              setCancelShow(true);
            }}
          >
            recommencer
          </NextButton>
        </ConfigSummary>

        <hr />
      </Breadcrumbs>
      <Footer />
    </div>
  );
}

export default App;
