
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';
import Float from 'components/float/float';

export default {
  types: [ 'cube', 'zoom', 'circle', 'float' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
  float: new Float(),
}
