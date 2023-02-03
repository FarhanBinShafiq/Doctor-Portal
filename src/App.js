import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';

import 'react-day-picker/dist/style.css';
import router from './Routes/Routes/Routes'

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
