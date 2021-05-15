import { addPadding } from '../helpers';

export default function PokemonId({ classes = '', id = 0 }) {
  return <div className={classes}>{`#${addPadding(id)}`}</div>
}
