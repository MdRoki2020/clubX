import { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './Layout/HomeLayout'

function App() {
  return (
    <Fragment>
        <BrowserRouter>
        
        <Routes>
          {/* For User */}
          <Route path="/" element={<HomeLayout />} />

          {/* <Route path="*" element={<Page404/>} /> */}
          
          {/* For Publisher */}


          {/* For Admin */}



          {/* for recovery password */}
          {/* <Route path="/sendOtp" element={<SendOtp />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/createPassword" element={<CreatePassword />} /> */}
          
        </Routes>

        </BrowserRouter>
      </Fragment>
  );
}

export default App;
