import Loading from 'components/loading';
import html from './line.html';
import './line.less';

class Line extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default Line;