// Обработчик нажатия кнопки
document.getElementById('submitButton').addEventListener('click', function() {
    // Отправляем AJAX запрос на сервер
    $.ajax({
        url: '/submit',
        method: 'POST',
        data: { data: 'Данные для отправки' },
        success: function(response) {
            // Обрабатываем успешный ответ от сервера
            document.getElementById('result').innerText = response.message;
        },
        error: function(error) {
            console.error('Ошибка:', error);
        }
    });
});