import './style/app.less';
import './index.html';

import Components from 'components/components';

var indexModule = {
  init() {
    this.bindEvent();
  },
  bindEvent(){
    let navbarLists = document.getElementsByClassName('navbar-list');
    if(!navbarLists || !navbarLists.length)
      return;
    for(var i=0; i<navbarLists.length; i++){
      let item = navbarLists[i];
      let type = item.getAttribute('type');
      if(Components.types.indexOf(type) === -1)
        return;
      item.onclick = function(e){
        Components[type].init();
      }
    }
  }
};

indexModule.init();
