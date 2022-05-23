$(document).ready(function(){
  // Adiciona um scroll suave para os links na barra de navegação
  $(".navbar a, footer a[href='#minhaPagina']").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      // Usando um metodo de animação para o scroll. Essa animação durará 800 milissegundos
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})