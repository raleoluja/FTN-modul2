$(document).ready(function(){
	

	// sledeće 3 funkcije se pozivaju iz inputKeyUp radi promene warning/success/error
	var changeToSuccess = function(glyphiconSpan, formGroup){
		formGroup.attr("class", "form-group has-feedback has-success");
		glyphiconSpan.attr("class", "glyphicon glyphicon-ok form-control-feedback");
	}

	var changeToWarning = function(glyphiconSpan, formGroup){
		formGroup.attr("class", "form-group has-feedback has-warning");
		glyphiconSpan.attr("class", "glyphicon glyphicon-warning-sign form-control-feedback");
	}

	var changeToError = function(glyphiconSpan, formGroup){
		formGroup.attr("class", "form-group has-feedback has-error");
		glyphiconSpan.attr("class", "glyphicon glyphicon-remove form-control-feedback");
	}

	// Funkcija će se pozvati kad god neko unese karakter u neko tekstualno polje (videti dole registrovane keyup događaje)
	// funkcija se poziva tako da se u nju prosleđuje vrednost atributa "name" komponente koja je registrovala događaj (nameInput, yearInput, descriptionInput, ...) 
	var inputKeyUp = function(componentName){ // component name - vrednost name atributa komponente nad kojom se dogodio keyup događaj: nameInput, yearInput,...
		var value = $("[name='" + componentName  +"']").val(); // preuzimamo korisnički unos komponente koja ima tu vrednost name atributa
		var glyphiconSpan = $("#" + componentName + "Glyph"); // glyphicon-ama je zadat id koji odgovara imenu polja, npr nameInput -> nameInputGlyph
		var formGroup = $("#" + componentName + "FG"); // form grupama je zadat id koji odgovara imenu polja, npr nameInput -> nameInputFG

		if(value){
			changeToSuccess(glyphiconSpan, formGroup);
		}else{
			changeToWarning(glyphiconSpan, formGroup);
		}
	}

	// svim input poljima dodeljujemo keyup događaj
	$("input").keyup(function(){ 			
		inputKeyUp(this.name); // sa this pristupamo komponenti nad kojom se desio keyup događaj (u property name se nalazi vrednost name atributa)
	});
	// dodeljujemo keyup tagu textarea
	$("textarea").keyup(function(){ 
		inputKeyUp(this.name); // sa this pristupamo komponenti nad kojom se desio keyup događaj (u property name se nalazi vrednost name atributa)
	});


	// funkcija salje prosledjeno vino na server
	var addWine = function(wine){			
		$.post("http://localhost:3000/api/wines", wine, function(data){
			// if(shouldAppend(data)){ // zadatak 7
			// 	addRow(data); // server (ako je zahtev uspešno obavljen) kao povratnu vrednost vraća dodato vino. Ovo vino se append-uje u tabelu
			// }
			// ako je vino uspešno poslato ispisuje se poruka o uspehu
			$("#msgAddWine").text("Wine successfully added.");
			$("#msgAddWine").attr("class", "text-success bg-success");

		}).error(function(xhr, textStatus, error){
			// ako slanje vina nije uspešno, ispisuje se poruka o neuspehu
			$("#msgAddWine").text("Error adding a wine, reason: " + error + ", status: " + textStatus);
			$("#msgAddWine").attr("class", "text-danger bg-danger");
		});
	}

	$("#addBtn").click(function(){
		var wine = { name: $("input[name='nameInput']").val(), 
			description: $("textarea[name='descriptionInput']").val(),  
			picture: "",
			year: $("input[name='yearInput']").val(), 
			grapes: $("input[name='grapesInput']").val(), 
			country: $("input[name='countryInput']").val(), 
			region: $("input[name='regionInput']").val()
		};
		if(checkInput(wine)){
			addWine(wine);	
		}
	});		


	// // zadatak 8
	var checkInput = function(wine){
		$(".addWineErrMsg").remove();
		var msg = "<span class=\"addWineErrMsg\" style=\"color: red\">obavezno polje<\span>";
		var msgYear = "<span class=\"addWineErrMsg\" style=\"color: red\">pogrešan unos<\span>";
		var returnVal = true;
		if(!wine.name){
			$("input[name='nameInput']").after(msg);
			returnVal = false;
		}
		if(!wine.description){
			$("textarea[name='descriptionInput']").after(msg);
			returnVal = false;
		}
		if(!wine.year){
			$("input[name='yearInput']").after(msg);
			returnVal = false;
		}else if(isNaN(wine.year)) {
			$("input[name='yearInput']").after(msgYear);
			returnVal = false;
		}
		if(!wine.grapes){
			$("input[name='grapesInput']").after(msg);
			returnVal = false;
		}
		if(!wine.country){
			$("input[name='countryInput']").after(msg);
			returnVal = false;
		}
		if(!wine.region){
			$("input[name='regionInput']").after(msg);
			returnVal = false;
		}
		return returnVal;
	}
	// end zadatak 8

});