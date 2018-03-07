import Loading from 'components/loading';
import html from './cube.html';
import './cube.less';

class Cube extends Loading {
  constructor(){
    super();
  }

  init(){
    console.log('cube init')
    super.init(html);
  }
};

export default Cube;
