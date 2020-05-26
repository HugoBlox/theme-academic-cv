function onPageLinkClicked(hash){
    let isHashSame = (location.hash == hash);
    if(isHashSame){
        //academic.jsのscrollToAnchorを呼ぶために、イベントを呼ぶ
        window.dispatchEvent(new Event("hashchange"));
    }else{
      location.hash = hash;
    }
    // $("a").filter(function(index, element){return element.href.startsWith(pageLink);}).each(function(index, element){
    //   console.log("a");
    // });
}
// function test01(){
//   console.log("hello");
// }