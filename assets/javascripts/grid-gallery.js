$(document).on('click','.gg-element',function(){
  var selected=$(this);
  var prev=$(this).prev().find('img');
  var next=$(this).next().find('img');
  $('#gg-screen').show();
  var l=$(".gg-element").length-1;
  var p=$(".gg-element").index(selected);
  function buttons(){
    if (l > 1) {
      if (p == 0){
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div>';
      }
      else if (p == l) {
        return '<div class="gg-close gg-bt">&times</div><div class="gg-prev gg-bt">&larr;</div>';
      }
      else{
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>';
      }
    }
    else{
      return '<div class="gg-close gg-bt">&times</div>';
    }
  }
  buttons();
  var content=buttons();
  $("#gg-screen").html('<div class="gg-image"></div><div class="gg-text"></div>' + content);
  $(".gg-image").html('<img src="'+ $('img', this).attr('src') +'">');
  $(".gg-text").html('<p>' + $('img', this).attr('alt') + '</p>');
    $("body").css('overflow','hidden');
    $(document).on('click','.gg-close',function(){
    $("#gg-screen").hide();
    $("body").css('overflow','auto');
  });
  $("#gg-screen").on('click', function(e) {
    if (e.target == this){
      $("#gg-screen").hide();
      $("body").css('overflow','auto');
    }
  });
  $(document).on('click','.gg-prev',function(){
    selected=selected.prev();
    prev=selected.find('img');
    prev_title=selected.find('img').attr('alt');
    var previmg='<img src="'+ prev.attr('src') +'">';
    var prevtext='<p>' + next.attr('alt') + '</p>';
    $(".gg-image").html(previmg);
    $(".gg-text").html(prevtext);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>' + '<div class="gg-text">' + prevtext + '</div>' + content);

  });
  $(document).on('click','.gg-nxt',function(){
    selected=selected.next();
    next=selected.find('img');
    var nxtimg='<img src="'+ next.attr('src') +'">';
    var nxttext='<p>' + next.attr('alt') + '</p>';
    $(".gg-image").html(nxtimg);
    $(".gg-text").html(nxttext);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>' + '<div class="gg-text">' + nxttext + '</div>' + content);
  });
  $(document).on('keydown',function(e) {
    if(e.keyCode == 37 && p>0) {
      selected=selected.prev();
      prev=selected.find('img');
      var previmg='<img src="'+ prev.attr('src') +'">';
      $(".gg-image").html(previmg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>' + content);
    }
    else if(e.keyCode == 39 && p < l) {
      selected=selected.next();
      next=selected.find('img');
      var nxtimg='<img src="'+ next.attr('src') +'">';
      $(".gg-image").html(nxtimg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>' + content);
    }
    else if(e.keyCode == 27) {
      $("#gg-screen").hide();
    $("body").css('overflow','auto');
    }
  });
});
