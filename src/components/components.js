
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';

export default {
  types: [ 'cube', 'zoom', 'circle' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
}
