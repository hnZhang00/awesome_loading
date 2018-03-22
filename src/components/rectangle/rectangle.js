import Loading from 'components/loading';
import html from './rectangle.html';
import './rectangle.less';

class Rectangle extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default Rectangle;
