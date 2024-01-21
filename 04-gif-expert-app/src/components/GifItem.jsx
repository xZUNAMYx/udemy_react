import ProtoTypes from "prop-types";

export const GifItem = ({title, url, id}) => {
  return (
        // <li key={image.id}>{image.title}</li>
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
  );
}

GifItem.protoTypes = {
  title: ProtoTypes.string.isRequired,
  url: ProtoTypes.string.isRequired,
}

GifItem.defaultProps ={
  title: 'No hay título',
  url: 'no se encontró alguna url',
}
