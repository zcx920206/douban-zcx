$('document').ready(function(){

	$("#to-top").click(function(){
		$('body').scrollTop(0);
	});

	$(".load-more").bind('click', function(){
        $.ajax({
        url: 'https://api.douban.com/v2/book/search?tag=小说&fields=title,author,publisher,price,pubdate,images',
        type: 'get',
        async: false,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'success_jsonpCallback',
        success: function(json){
        $.each(json.books,function(i,value){
       $('#book-list').append(
       "<li>"+
                "<img src='"+value.images.small+"'>"+
                "<div class='book-detail'>"+
                    "<h4>"+value.title+"</h4>"+
                    "<p class='book-info'>"+
                        "<span>"+value.author+"/"+"</span>"+
                        "<span>"+value.publisher+"/"+"/"+"</span>"+
                        "<span>"+value.price+"/"+"</span>"+
                        "<span>"+value.pubdate+"/"+"</span>"+
                    "</p>"+
                "</div>"+
            "</li>");
    })
    },
        });
  });
    $("#search-form").submit(function(){
     $.ajax({
        url: 'https://api.douban.com/v2/book/search?tag='+$('#search-content').val(),
        type: 'get',
        async: false,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'success_jsonpCallback',
        success: function(json){
            $("#book-list").empty();
         $.each(json.books,function(i,value){
           
           $('#book-list').append(
       "<li>"+
                "<img src='"+value.images.small+"'>"+
                "<div class='book-detail'>"+
                    "<h4>"+value.title+"</h4>"+
                    "<p class='book-info'>"+
                        "<span>"+value.author+"/"+"</span>"+
                        "<span>"+value.publisher+"/"+"/"+"</span>"+
                        "<span>"+value.price+"/"+"</span>"+
                        "<span>"+value.pubdate+"/"+"</span>"+
                    "</p>"+
                "</div>"+
            "</li>");
       
        })
      },
        });
     return false;
  });
})