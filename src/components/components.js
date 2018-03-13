
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';
import Float from 'components/float/float';
import Square from 'components/square/square';
import SquareInline from 'components/squareInline/squareInline';

export default {
  types: [ 'cube', 'zoom', 'circle', 'float', 'square', 'squareInline' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
  float: new Float(),
  square: new Square(),
  squareInline: new SquareInline(),
}
