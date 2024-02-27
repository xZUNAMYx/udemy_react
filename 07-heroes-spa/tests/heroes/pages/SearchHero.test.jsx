import { getByLabelText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

describe('Pruebas en <SearchHero />', () => {
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug();
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrat a Batman y el input con el valor del queryString', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug();
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');
    });

});
