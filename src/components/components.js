
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';
import Float from 'components/float/float';
import Square from 'components/square/square';
import SquareInline from 'components/squareInline/squareInline';
import Ladder from 'components/ladder/ladder';
import LadderBounce from 'components/ladderBounce/ladderBounce';

export default {
  types: [ 'cube', 'zoom', 'circle', 'float', 'square', 'squareInline', 'ladder', 'ladderBounce' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
  float: new Float(),
  square: new Square(),
  squareInline: new SquareInline(),
  ladder: new Ladder(),
  ladderBounce: new LadderBounce(),
}
