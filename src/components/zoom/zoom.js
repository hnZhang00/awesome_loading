import Loading from 'components/loading';
import html from './zoom.html';
import './zoom.less';

class Zoom extends Loading {
  constructor(){
    super();
  }

  init(){
    console.log('zoom init')
    super.init(html);
  }
};

export default Zoom;
