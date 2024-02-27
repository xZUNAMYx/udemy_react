import { render, screen} from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {
    
    test('Debe de mostrar el children si no está autenticado', () => {
        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública')).toBeTruthy();
        // screen.debug();
    });

    test('Debe navegar si está autenticado.', () => {
        const contextValue = {
            logged: true,
            user: {
                names: 'ZUNAMY',
                id: 'ABC123',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                              <h1>Ruta pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path='/' element={ <h1>Página marvel</h1> }/>    {/*en el path='la_ruta' debe ser igual que nuestro appRouter o ruta destino que buscamos. */}
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Página marvel' ));
        // screen.debug();

    });

});
