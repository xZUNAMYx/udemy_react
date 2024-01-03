import PropTypes from "prop-types";

const getName = (name)=>{
    return name;
}

export const AndresApp = ({title, subTitle}) =>{
    return (
    //   Sinonimo del fragmento
        <>  
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    )
}

AndresApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

AndresApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
}