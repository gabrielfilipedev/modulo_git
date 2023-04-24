$(document).ready(function() {
    $('#adicionar-tarefa').click(function(event) {
        event.preventDefault();
        var tarefa = $('#nova-tarefa').val();
        if (tarefa.trim() !== '') {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>');
            $('#nova-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});
