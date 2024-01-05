import PropTypes from "prop-types";

const getName = (name)=>{
    return name;
}

export const AndresApp = ({title, subTitle, name}) =>{
    return (
    //   Sinonimo del fragmento
        <>  
            <h1 data-testid='test-title'> {title} </h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

AndresApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

AndresApp.defaultProps = {
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Andres Alvarez',
}