import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducedr', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect( state ).toEqual( {logged: false} );
    });

    test('Debe el (login) llamar al login auterticar y establecer el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                names: 'Andres Alvarez',
                id: '123',
            }
        }

        const state = authReducer({ logged: false}, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload,
        });

    });

    test('Dede de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: {id: '123', names: 'Andres Alvarez'}
        };

        const action = {
            type: types.logout,
        }

        const newState = authReducer( state, action);
        expect( newState ).toEqual({ logged: false });
    });
    
    
});