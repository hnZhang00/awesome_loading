import Loading from 'components/loading';
import html from './circle.html';
import './circle.less';

class Circle extends Loading {
  constructor(){
    super();
  }

  init(){
    console.log('circle init')
    super.init(html);
  }
};

export default Circle;
