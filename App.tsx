import * as React from 'react';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

import Buttons from './Buttons';

export default function App() {
  try {
    return (
      <div>
        <div className="buttons">
          <div className="content">
            <Buttons content={'Lorem'} />
          </div>
        </div>

        <div className="first bg-primary">
          <Page1 content={'See Ya!'} />
          <Page1 content={'See Ya!'} />
          <Page1 content={'See Ya!'} />
          <Page1 content={'See Ya!'} />
        </div>

        <div className="secound">
          <Page2 />
        </div>

        <div className="three">
          <Page3 />
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div>
        <Error />
      </div>
    );
  }
}
