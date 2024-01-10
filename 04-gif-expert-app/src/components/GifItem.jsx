
export const GifItem = ({title, url}) => {
  return (
        // <li key={image.id}>{image.title}</li>
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
  );
}
