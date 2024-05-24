import React from 'react';
import GetStarted from './GetStarted';
import BusinessDetails from './BusinessDetails';
import BusinessCategory from './BusinessCategory';
import Homepage from './Homepage';
import Customize from './Customize';
import EditWhatsApp from './EditWhatsApp';
import ShareOnWhatsApp from './ShareOnWhatsApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './CommonContext';


function App() {
  return (
    <>
     
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <DataProvider>
          <Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path='/business-details' element={<BusinessDetails />} />
            <Route path='/business-category' element={<BusinessCategory />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/customize' element={<Customize />} />
            <Route path='/edit-whatsapp' element={<EditWhatsApp />} />
            <Route path='/share-on-whatsapp' element={<ShareOnWhatsApp />} />
          </Routes>
          </DataProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
