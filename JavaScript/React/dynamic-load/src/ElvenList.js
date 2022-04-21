import { nanoid } from 'nanoid'

const ElvenList = ({ elfModules }) =>
  Object.values(elfModules).map(Mod => (
    <Mod key={nanoid()} />
  ));

export default ElvenList;