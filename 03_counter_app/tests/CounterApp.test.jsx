import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 0;

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render( <CounterApp value={initialValue}/>)

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={100}/>);

        expect(screen.getByText(100)).toBeTruthy();
        // expect( screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    });
    
    test('Debe de incrementar con el boton +1', () => {
        render( <CounterApp value={initialValue}/> );
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getAllByText('1')).toBeTruthy();
    });

    test('Debe decrementar con el boton -1', () => {
        render( <CounterApp value={initialValue}/> );
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getAllByText('-1')).toBeTruthy();
    });
    
    test('Debe funcionar el botón de Reset', () => {
        render( <CounterApp value={initialValue}/> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(document.querySelector('#btn-reset'));
        expect(screen.getByText(initialValue)).toBeTruthy(); 
    });
        
});
