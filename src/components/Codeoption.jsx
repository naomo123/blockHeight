import React from 'react';
import './CodeOption.css'; 


function CodeOption() {
  return (
    <div className="container">
      <div id="css-ruleset">
        <h2>CSS Ruleset</h2>
        <p className="block selector">
          <span className="green">.container</span>
          <span className="magenta">p</span>
          <span className="green">:<span className="block pseudo-class">first-child</span>::<span className="block pseudo-element">first-letter</span></span>
          <span className="block open-bracket">{'{'}</span>
        </p>
        <p>
          <span className="block declaration"><span className="blue">color</span>: <span className="purple">#000</span>;</span>
        </p>
        <p>
          <span className="block property"><span className="blue">font-size</span>: <span className="block value"><span className="purple">24</span><span className="magenta">px</span></span>;</span>
        </p>
        <p>
          <span className="blue">text-transform</span>: <span className="block keyword"><span className="blue">uppercase</span></span>;
        </p>
        <p>
          <span className="block end-bracket">{'}'}</span>
        </p>
      </div>
    </div>
  );
}

export default CodeOption;
