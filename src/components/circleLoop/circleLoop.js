import Loading from 'components/loading';
import html from './circleLoop.html';
import './circleLoop.less';

class CircleLoop extends Loading {
  constructor(){
    super();
  }
  init(){
    super.init(html);
  }
}

export default CircleLoop;