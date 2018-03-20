
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';
import Float from 'components/float/float';
import Square from 'components/square/square';
import SquareInline from 'components/squareInline/squareInline';
import SquareBlock from 'components/squareBlock/squareBlock';
import Ladder from 'components/ladder/ladder';
import LadderBounce from 'components/ladderBounce/ladderBounce';
import Line from 'components/line/line';
import Dot from 'components/dot/dot';
import Eye from 'components/eye/eye';

export default {
  types: [ 'cube', 'zoom', 'circle', 'float', 'square', 'squareInline', 'squareBlock', 'ladder', 'ladderBounce', 'line', 'dot', 'eye' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
  float: new Float(),
  square: new Square(),
  squareInline: new SquareInline(),
  squareBlock: new SquareBlock(),
  ladder: new Ladder(),
  ladderBounce: new LadderBounce(),
  line: new Line(),
  dot: new Dot(),
  eye: new Eye(),
}
