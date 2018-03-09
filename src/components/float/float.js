import Loading from 'components/loading';
import html from './float.html';
import './float.less';

class Float extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html)
  }
}

export default Float;
