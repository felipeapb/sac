$( document ).ready( function(){

	$('.saudacao').delay(500).fadeIn(500);
	$('.inicial').delay(1500).fadeIn(500);
		$('.escolha').click(function(){
			var destino = $(this).attr('data-destino');
			$('.escolha').slideUp(700);
			$('.saudacao').slideUp(700);
			$('.icones').delay(600).slideDown(1000);
			$('.'+destino).delay(1600).slideDown(1000);
		});
//abre sub conteudo
	$('.m').click(function(){
			var destino = $(this).attr('data-destino');
			var classe = $(this).attr('data-classe');
			$('.m').removeClass('m1_ativado');
			$('.m').removeClass('m2_ativado');
			$('.m').removeClass('m3_ativado');
			$('.m').removeClass('m4_ativado');
			$('.m').removeClass('m5_ativado');
			$('.m').removeClass('m6_ativado');
			$('.con').hide();
			$('.'+destino).fadeIn(1000);
			$(this).addClass(classe);



	});

//Abre conteúdo
	$('.boxitem').click(function(){
		var destino = $(this).attr('data-dir');
		$('.box_conteudo').slideUp(1000);
		$('.'+destino).delay(800).slideDown(1000);
	});
//Escolhe forma de curso
	$('.boxitem_destaque').click(function(){
		var destino = $(this).attr('data-dir');
		$('.'+destino).delay(300).slideDown(300);
		$('.forma').delay(1000).slideUp(600);
		$('.sumir').delay(2000).fadeIn(0);
	});
//Aparece botão de voltar a tela principal
	$('.sumir').click(function(){
		$('.forma').delay(1000).slideDown(300);
		$('.presencial,.npresencial').slideUp(300);
		$('.sumir').fadeOut(400);
	});
//acordeon
	$('.pergunta').click(function(){
		var resposta = $(this).attr('data-alvo');
		var classe = $(this).children().attr('data-valor');
		$('.resposta').slideUp(400);
		$('.glyphicon').attr('class','glyphicon glyphicon glyphicon-plus');
		$(this).children().attr('class','glyphicon glyphicon glyphicon-minus');
		$('.'+resposta).slideDown(400);

	});

});
