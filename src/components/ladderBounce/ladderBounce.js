import Loading from 'components/loading';
import html from './ladderBounce.html';
import './ladderBounce.less';

class LadderBounce extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html)
  }
}

export default LadderBounce;