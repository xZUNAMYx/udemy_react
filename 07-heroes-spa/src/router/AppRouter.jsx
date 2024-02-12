import {Navigate, Route, Routes} from 'react-router-dom';

import { LoginPage } from '../auth';
import { Navbar } from '../ui';
import { DcPage, MarvelPage} from '../heroes';

export const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes >
            <Route>
                <Route path='marvel' element={<MarvelPage /> } />
                <Route path='dc' element={<DcPage /> } />

                <Route path='login' element={<LoginPage /> } />

                <Route path='/' element={<Navigate to="/marvel"/>} />

            </Route>
        </Routes>
    </>
  );
}
