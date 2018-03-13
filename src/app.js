import './style/app.less';
import './index.html';

import Components from 'components/components';
import Loading from 'components/loading';

var indexModule = {
  init() {
    this.bindEvent();
  },
  bindEvent(){
    Components['squareInline'].init();
    let navbarLists = document.getElementsByClassName('navbar-list');
    if(!navbarLists || !navbarLists.length)
      return;
    for(var i=0; i<navbarLists.length; i++){
      let item = navbarLists[i];
      let type = item.getAttribute('type');
      item.onclick = function(e){
        if(Components.types.indexOf(type) === -1){
          let loading = new Loading;
          loading.destory();
          return;
        }
        Components[type].init();
      }
    }
  }
};

indexModule.init();
