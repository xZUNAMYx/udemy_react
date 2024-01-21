import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Piece';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category }/>);
    
        expect( screen.getByText( 'Cargando...' ));
        expect( screen.getByText( category ));
    });
    
    test('Debe de mostrar items cuando se cargan la imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'One Piece',
                url: 'https://localhost/onepiece.jpg'
            },
            {
                id: '123',
                title: 'Luffy',
                url: 'https://localhost/luffy.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(2);
    });     
    
});
