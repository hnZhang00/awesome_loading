import Loading from 'components/loading';
import html from './square.html';
import './square.less';

class Square extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default Square;