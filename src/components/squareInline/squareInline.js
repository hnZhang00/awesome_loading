import Loading from 'components/loading';
import html from './squareInline.html';
import './squareInline.less';

class SquareInline extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default SquareInline;
