
import Cube from 'components/cube/cube';
import Zoom from 'components/zoom/zoom';
import Circle from 'components/circle/circle';
import CircleLoop from 'components/circleLoop/circleLoop';
import Float from 'components/float/float';
import Square from 'components/square/square';
import SquareInline from 'components/squareInline/squareInline';
import SquareBlock from 'components/squareBlock/squareBlock';
import SquareLoop from 'components/squareLoop/squareLoop';
import Ladder from 'components/ladder/ladder';
import LadderBounce from 'components/ladderBounce/ladderBounce';
import Line from 'components/line/line';
import Dot from 'components/dot/dot';
import Eye from 'components/eye/eye';
import Rectangle from 'components/rectangle/rectangle';

export default {
  types: [ 'cube', 'zoom', 'circle', 'circleLoop', 'float', 'square', 'squareInline', 'squareBlock', 'squareLoop', 'ladder', 'ladderBounce', 'line', 'dot', 'eye', 'rectangle' ],
  cube: new Cube(),
  zoom: new Zoom(),
  circle: new Circle(),
  circleLoop: new CircleLoop(),
  float: new Float(),
  square: new Square(),
  squareInline: new SquareInline(),
  squareBlock: new SquareBlock(),
  squareLoop: new SquareLoop(),
  ladder: new Ladder(),
  ladderBounce: new LadderBounce(),
  line: new Line(),
  dot: new Dot(),
  eye: new Eye(),
  rectangle: new Rectangle(),
}
