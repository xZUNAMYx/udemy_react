import { render } from "@testing-library/react";
import { AndresApp } from "../src/AndresApp";

describe('Pruebas en <AndresApp />', () => { 
    // test('Debe hacer match con el snapshot', () => { 
    //     const title = 'Hola soy Andres ALvarez'
    //     const {container} = render( <AndresApp title={title} /> );

    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () => { 
        const title = 'Hola soy Andres ALvarez'
        const {container, getByText, getByTestId} = render( <AndresApp title={title} /> );
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title); //Para no tener en cuenta los espacios y solo que compare que contenga esto
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe mostrar un subtitle por la props', () => { 
        const title = 'Hola soy Andres ALvarez'
        const subtitle = 'Soy un subtitulo'

        const {getAllByText} = render( 
            <AndresApp 
                title={ title } 
                subTitle={ subtitle }
            /> 
        );

        expect(getAllByText(subtitle).length).toBe(2);

    });
});