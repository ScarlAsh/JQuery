$(function(){
    //to do list
    $('#add').on('click' , function(){
        let newTask = $('input[id="task"]').val();
        let newRow = 
        `<div id='newrow'>
            <label>${newTask}</label>
            <button class='done'>Done</button>
            <button class='delete'>Delete</button>
        </div>`;
        $('#container').append(newRow);
    });
    $('#container').on('click', '.delete', function(event) {
        $(this).parent().remove();
    });
    $('#container').on('click', '.done', function(event) {
        $(this).parent().css('background-color' , 'lightgreen' );
    });
    // draggable
    $('img:eq(0)').droppable({
        drop: function(event, ui) {
            ui.draggable.hide();
        }
    });
    $('img:eq(1)').draggable();
    //run -return
    $('#run-return button:eq(0)').on('click' , function(event){
        $(event.target).parent().addClass('run');
    })
    $('#run-return button:eq(1)').on('click' , function(event){
        $(event.target).parent().removeClass('run');
    })
    // img
    setTimeout(function(){
        $('img[id = "flower"]').addClass('flower');
    }, 1000)
});
