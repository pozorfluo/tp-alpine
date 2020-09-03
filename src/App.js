import React, { useState } from 'react';
import './App.css';
import {useConfigMachineEmit} from './machines';
import {
  NextButton,
  Footer,
  Breadcrumbs,
  ConfigSummary,
  ConfigModal,
} from './components';

function App() {
  const [cancelShow, setCancelShow] = useState(false);
  const emit = useConfigMachineEmit();

  return (
    <div className="App">
      <Breadcrumbs>
        <ConfigModal
          show={cancelShow}
          title="ÊTES-VOUS SÛR ?"
          cancel="ANNULER"
          ok="RECOMMENCER"
          onHide={() => {
            emit('cancel');
            setCancelShow(false);
          }}
          onOk={() => {
            emit('confirm');
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
              emit('reset');
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
