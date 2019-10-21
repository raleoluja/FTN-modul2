$(document).ready(function(){
	// zadatak 1
	
	// inicijalizacija parametara za dobavljanje niza vina
	var nameFilter = ""; // ime prema kome se vrsi sortiranje
	var sortCriteria = ""; // kriterijum prema kome se sortira 
	var sortDirection = "asc"; // smer sortiranja (bilo koja vrednost sem desc znaci rastuci smer)
	var page = 1; // stranica tabele koja se trenutno prikazuje
	var pageSize = 5; // maksimalan broj vina u tabeli

	var wineCount = 0; // koliko ima vina koja odgovaraju kriterijumia pretrage (azurira se u funkciji getWines() prilikom dobavljanja vina sa servera)


	// zadatak 8 Bootstrap - podešavanje komponente za paginaciju. Funkcija se poziva iz getWines da bi se komponenta svaki put podesila prema broju vina koji se vraća iz upita
	var adjustPagination = function(){
		var numPages = Math.ceil(wineCount / pageSize); // određivanje broja stranica paginacije
		$("#wine_pagination").empty(); // uklanjaju se svi <li> elementi iz komponente paginacije

		//napravićemo pagination komponentu (npr. ukoliko imamo 3 stranice: "<", "1", "2", "3", ">")
		$("#wine_pagination").append("<li id='back'><span class='paginationPage'><</span></li>"); // za < stavljamo id "back"
		for(var i=1; i<=numPages; i++){
			$("#wine_pagination").append("<li id='" + i +"'><span class='paginationPage'>" + i + "</span></li>"); // za svaku stranicu stavljamo id koji odgovara broju stranice
		}
		$("#wine_pagination").append("<li id='next'><span class='paginationPage'>></span></li>"); // za > stavljamo id "next"

		// u komponenti paginacije pronalazimo <li> koji odgovara trenutno aktivnoj stranici i postavljamo mu class="active". Aktivna stranica se čuva u varijabli page
		$("#" + page).attr("class", "active");
		// ako je page == 1 stavljamo da je back disabled, a ako se nalazimo na poslednjoj stranici (page==numPages) stavljamo da je next disabled
		if (page==1) {
			$("#back").attr("class", "disabled");
		}
		if(page==numPages){
			$("#next").attr("class", "disabled")
		}

		// spanovima u paginaciji dodeljujemo onClick događaj - da se prilikom klika na stranicu pređe na tu stranicu tabele
		// svim linkovima u okviru <li> taga je dodeljena klasa class='paginationPage'
		$(".paginationPage").click(function(){
			var clickedPage = $(this).parent().attr("id"); // sa $(this) dobijamo span na koji je kliknuto. Sa parent() dobijamo njegovog roditelja (<li> komponentu) - ova komponenta ima id podešen prema broju stranice na koju je kliknuto

			if (clickedPage == "back"){
				if(page>1){
					page -= 1; 	
					getWines(); // da bi se refreshovala tabela
				}				
			}else if(clickedPage == "next"){
				if(page<numPages){
					page += 1;
					getWines(); // da bi se refreshovala tabela
				}
			}else{
				if(page != clickedPage){
					page = clickedPage;						
					getWines(); // da bi se refreshovala tabela
				}
			}
			
		});
	}

	// dobavlja niza vina sa servera na osnovu zadatih aprametara
	var getWines = function(){

		var filterParams = {
			"name": nameFilter
		}

		var paramsObj = {
			"filter": filterParams,
			"sort": sortCriteria,
			"sortDirection" : sortDirection,
			"page" : page,
			"pageSize" : pageSize
		}

		$.get("http://localhost:3000/api/wines", paramsObj, function(response, status){
			var wines = response.results;
			wineCount = response.count;
			populateTable(wines);

			// paginacija (zadatak 5): sakriti next link ako server nije vratio ni jedno vino (došli smo do kraja liste)
			var numPages = Math.ceil(wineCount / pageSize);
			if(page == numPages || wineCount == 0){ // ako ima samo jedna stranica sa rezultatima, sakri next link
				$("#next").hide(); 
			}else{
				$("#next").show(); 
			}
			if(page == 1){
				$("#back").hide(); // na pocetnoj smo stranici - uklanjamo back	
			}else{
				$("#back").show();
			}
			adjustPagination();
			// end paginacija (zadatak 5)

		}).error(function(xhr, textStatus, error){ // xhr - XMLHttpRequest objekat
			// ako je došlo do greške (npr. pogrešan URL) postaviće se tekst o grešci u spanu sa id="errMsg"
			$("#errMsgGetWines").text("Error loading table data, reason: " + error + ", status: " + textStatus);
			$("#next").hide(); // zadatak 5 (paginacija):  sakriti next link ako je došlo do greške					
		});
	}
	getWines(); // poziv funkcije da bi se inicijalno popunila tabela sa vinima	

	// popunjava tabelu na osnovu prosledjenog niza vina
	var populateTable = function(wineArray){
		$(".wineRow").remove(); // prvo se brišu svi redovi tabele (videti funkciju addRow - svakom redu je dodeljen class='wineRow')
		for(var i=0; i<wineArray.length; i++){
			addRow(wineArray[i]);
		}
	}

	// dodavanje jednog reda u tabelu na osnovu prosledjenog vina
	var addRow = function(wine){
		var row = "<tr class='wineRow'>";
		row += "<td>";
		row += "<div>" + wine.name + "</div>";
		
		// Bootstrap zadatak 9:  link je napravljen tako da aktivira collapse sa id koji je jednak id tog vina
		row += "<div><input type='button' class='btn btn-link' value='description' data-toggle='collapse' data-target='#wine_" + wine._id + "'></div>"
		// ceo sledeći deo je napravljen da bude collapsable i dodeljen mu je id vina
		row += "<div class='collapse' id='wine_" + wine._id + "'>"
			row += "<div><img src='images/wine_images/" + wine.picture + "' width='100'></div>";
			row += "<div><small>" + wine.description + "</small></div>";
		row += "<div>";
		// end Bootstrap zadatak 9
		
		row += "</td>";
		row += "<td>" + wine.year + "</td>";
		row += "<td>" + wine.grapes + "</td>";
		row += "<td>" + wine.country + "</td>";
		row += "<td>" + wine.region + "</td>";
		row += "</tr>";
		$("#wineData").append(row);
	}
	// end zadatak 1

	// zadatak 2
	$("#searchName").keyup(function(){
		// this - vraća DOM element nad kojim se desio događaj, sa $(this) omogućavamo da se mogu nad tim elementom pozivati jQuery metode
		nameFilter = $(this).val(); // svaki put kada korisnik unese karakter preuzima se tekst i stavlja u nameFilter (parametar koji će se slati serveru prilikom dobavljanja vina)				
		page = 1; // zadatak 5 (da ne bi smo ostali na n-toj stranici a ima ih manje od n koje odgovaraju name filteru )
		getWines(); // dobavi novu listu vina i refresh-uj vrednosti u tabeli		
	});
	// end zadatak 2

	// zadatak 3
	var sort = function(criteria){
		if(sortCriteria === criteria){ // zadatak 4: change the sorting direction
			if(sortDirection === "asc"){
				sortDirection = "desc";
			}else{
				sortDirection = "asc";
			}
		}else{
			sortCriteria = criteria;			
			sortDirection = "asc";
		}
		getWines(); // refresh tabele prema sort kriterijumu
	}


	$(".sortBtn").click(function(){ // sva sort dugmeta imaju class = "sortBtn"
		// this - vraća DOM element nad kojim se desio događaj, sa $(this) omogućavamo da se mogu nad tim elementom pozivati jQuery metode
		// $(this).attr("name") vraća vrednost name atributa elementa nad kojim se desio click događaj. Imena su nameštena tako da odgovaraju sort kriterijumima
		sort($(this).attr("name"));		
	});	
	// end zadatak 3

	// zadatak 5
	$("#next").click(function(){		
		var numPages = Math.ceil(wineCount / pageSize);
		if(page<numPages){
			page = page + 1;			
			getWines(); // refresh tabele
		}
	});

	$("#back").click(function(){		
		if(page>1){
			page = page - 1;			
			getWines(); // refresh tabele
		}
	});
	// end zadatak 5
});