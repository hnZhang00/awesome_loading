
class Loading {
  constructor(){

  }

  init(html){
    let content = document.querySelector('.content');
    if(content)
      content.innerHTML = html;
  }

  destory(){
    let content = document.querySelector('.content');
    if(content)
      content.innerHTML = '效果展示';
  }

};

export default Loading;
