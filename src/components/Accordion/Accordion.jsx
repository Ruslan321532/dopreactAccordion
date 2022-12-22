import React, { useState } from "react";

import "./Accoridon.css";

function App() {
 
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); 
  };

  const [shoy,setshoy] = useState(false);
  const handlopen = () => {
    setshoy(!shoy)
  };

  return (
    <div className="App">
      <div className="accordion">
        <div className="accordion_header" onClick={handleOpen}>
          <div>Что такое Redux?</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordion_bods">
                Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. 
                Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, 
                позволяющих значительно упростить передачу данных хранилища через контекст.
                Ну а проще говоря боль и страдания.
          </div>
        )}
      </div>
      <>
      <div className="Apps">
      <div className="accordions">
        <div className="accordions_header" onClick={handlopen}>
          <div>Что такое React?</div>
          <div className="signs">{shoy ? '-' : '+'}</div>
        </div>
        {shoy && (
          <div className="accordions_bods">
              React – это популярная библиотека языка программирования Javascript, которая применяется для создания пользовательских web-интерфейсов.
               Она имеет определенные шаблоны, благодаря чему существенно упрощает и ускоряет процесс frontend-разработки. Говоря простыми словами, разработчик на React.10
          </div>
        )}
      </div>
    </div>
      </>
    </div>
    
  );
}
export default App