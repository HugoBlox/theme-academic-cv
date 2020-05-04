function onPageLinkClicked(hash){
    let isHashSame = (location.hash == hash);
    if(isHashSame){
        //academic.jsのscrollToAnchorを呼ぶために、イベントを呼ぶ
        window.dispatchEvent(new Event("hashchange"));
    }else{
      location.hash = hash;
    }
}