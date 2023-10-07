import './App.css';
import Wrapper from "./Wrapper";
import DivBlockOnlyClass from './elements/DivBlockOnlyClass';
import Button from './elements/Button';

function App() {

  return (
    <>
      <Wrapper wrapper='wrapper' />
      <DivBlockOnlyClass id="callback" ariaHidden="true" className="popup">
        <DivBlockOnlyClass className="popup__wrapper">
          <DivBlockOnlyClass className="popup__content">
            <Button data-close type="button" className="popup__close" text="close" />
            <DivBlockOnlyClass className="popup__text" text="There will be a form" />
          </DivBlockOnlyClass>
        </DivBlockOnlyClass>
      </DivBlockOnlyClass>
    </>
  );
}

export default App;
