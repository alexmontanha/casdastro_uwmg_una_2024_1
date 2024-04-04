$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });
});

// Consulta CEP
function consultaCep() {
    var cep = document.getElementById('cep').value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                var dadosJson = JSON.parse(xhr.responseText);
                console.log(dadosJson);
                document.getElementById('logradouro').value = dadosJson.logradouro;
                document.getElementById('bairro').value = dadosJson.bairro;
                document.getElementById('cidade').value = dadosJson.localidade;
                document.getElementById('estado').value = dadosJson.uf;
            }
        }
    }
    xhr.send();
}