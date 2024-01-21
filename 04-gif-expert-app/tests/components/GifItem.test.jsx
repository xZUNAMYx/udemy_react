import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en GifItem.jsx', () => { 
    const title = 'Primera prueba';
    const url = 'https://google.com/fotos-de-gatitos'

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URl y el ALT indicado', () => {
        render(<GifItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });
    
    test('Debe de mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect( screen.getByText( title )).toBeTruthy();
    });
    
    
})