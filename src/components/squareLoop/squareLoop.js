import Loading from 'components/loading';
import html from './squareLoop.html';
import './squareLoop.less';

class SquareLoop extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default SquareLoop;
