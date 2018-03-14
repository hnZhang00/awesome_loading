import Loading from 'components/loading';
import html from './ladder.html';
import './ladder.less';

class Ladder extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html)
  }
}

export default Ladder;