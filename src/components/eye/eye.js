import Loading from 'components/loading';
import html from './eye.html';
import './eye.less';

class Eye extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}
export default Eye;