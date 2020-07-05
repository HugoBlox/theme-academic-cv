//参考：https://qiita.com/rukurx/items/1e504e2dacb41e2668f2
$('.card-simple').click(function(event){
  if(!$(event.target).closest('a').length) {
    //card-simple内のリンク以外がクリックされた場合
    let url = $(this).children('.article-title').children('a').attr('href');
    if(!url) return;
    let baseUrl = '{{ $.Site.BaseURL }}';
    let isAbsoluteUrl = /^https?:\/\//i.test(url);
    let isInternalLink = !isAbsoluteUrl || url.startsWith(baseUrl);
    if(isInternalLink){
      //このブログ内のページへのリンクなら同じタブで開く
      location.href = url;
    }else{
      //このブログ以外のページへのリンクなら新しいタブで開く
      window.open(url, "");
    }
  }
});