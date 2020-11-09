import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

// const AppWrap = () => {
//     return (
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     )
// };

ReactDOM.render(React.createElement(App), document.getElementById('root'));
