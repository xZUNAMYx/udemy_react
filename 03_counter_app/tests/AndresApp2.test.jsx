import { render, screen } from "@testing-library/react";
import { AndresApp } from "../src/AndresApp";

describe('Pruebas en <AndresApp2 />', () => { 
    const title = 'Hola soy Andres Alvarez';
    const subTitle = 'Soy un subtitulo';

    test('Debe hacer match con el snapShot', () => { 
        const {container} = render( <AndresApp title={title}/>);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje "Hola soy Andres ALvarez"', () => { 
        render( <AndresApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug();
    });

    test('Debe mostrar el titulo en un h1', () => { 
        render( <AndresApp title={title}/>);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props', () => { 
        render( 
            <AndresApp 
                title={ title } 
                subTitle={ subTitle }
            /> 
        );

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});