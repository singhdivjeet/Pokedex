export default function PokemonThumbnail({ classes = '', imgPath, alt = '' }) {
  return <img className={classes} src={imgPath} alt={alt} />;
}
