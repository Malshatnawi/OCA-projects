// Change Properties

function changeFontSize() {
    var z = document.getElementById("font_size").value;
    document.body.style.fontSize=z;
};


function changeColor (){
  var x =document.getElementById("pickcolor").value;
  document.body.style.backgroundColor= x;
}

function changeFontFamily(){
  var y = document.getElementById("font_family").value;
  document.body.style.fontFamily=y;
}


// To Do List Functions

$(document).ready(function () {
    $('#list-items').html(localStorage.getItem('listItemskey'));
    $('.add-items-form').submit(function(event)
    {
        event.preventDefault();
        var item = $('#item-input').val();

        if(item){
            $("#list-items").append("<li>" + item + "<a class= 'remove' > || delete </a> <hr> </li>" );
            localStorage.setItem('listItemskey', $('#list-items').html());
            $('#item-input').val("");
        }
    });

    $(document).on('click','.remove', function()
    {
        $(this).parent().remove();
        localStorage.setItem('listItemskey', $('#list-items').html());
    });

    
});

// Clear Storage Function

function clearStorage(){
    localStorage.clear();
    document.getElementById("list-items").innerHTML="";
}



