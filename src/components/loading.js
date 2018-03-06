
class Loading {
  constructor(){

  }

  init(html){
    let content = document.querySelector('.content');
    if(content)
      content.innerHTML = html;
  }

};

export default Loading;
