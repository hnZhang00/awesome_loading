import Loading from 'components/loading';
import html from './squareBlock.html';
import './squareBlock.less';

class SquareBlock extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default SquareBlock;
