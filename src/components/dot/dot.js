import Loading from 'components/loading';
import html from './dot.html';
import './dot.less';

class Dot extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}
export default Dot;
