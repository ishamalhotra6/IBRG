import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './components/ui/button';
import Input from './components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem }  from './components/ui/select';
import PaginationControls from './PaginationControls';
import PartnerList from './PartnerList';
import PartnerFilter from './PartnerFilter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

