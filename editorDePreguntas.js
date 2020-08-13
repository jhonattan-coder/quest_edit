// JavaScript Document
function mostrarPaleta(){
  var div = document.getElementById("editordeecuaciones");
  div.style.display = "block";
  hacerclic();
}

function hacerclic(){
  for(i=0;i<184;i++){
  document.querySelectorAll('button')[i].onclick=edit;
  }
}

function ocultarPaleta(){	      
  var area=document.getElementById("vistaprevia");
  area.textContent="";
  var div = document.getElementById("editordeecuaciones");
  div.style.display = "none";
}

function cambiarPaleta(e){
	var grupo1 = document.getElementById("grupo1");
	grupo1.style.visibility = "hidden";
	var grupo2 = document.getElementById("grupo2");
	grupo2.style.visibility = "hidden";
	var grupo3 = document.getElementById("grupo3");
	grupo3.style.visibility = "hidden";
	var grupo4 = document.getElementById("grupo4");
	grupo4.style.visibility = "hidden";
	
	if(e.target.id==="operadores"){
		grupo1.style.visibility = "visible";
	//var btn = document.createElement("button");
	//grupo1.appendChild(btn);
	}
	if(e.target.id==="logicayconjuntos"){
		grupo2.style.visibility = "visible";
	}
	if(e.target.id==="simbolosgriegos"){
		grupo3.style.visibility = "visible";
	}
	if(e.target.id==="avanzado"){
	grupo4.style.visibility = "visible";
	}
	
}
function edit(e){ 
  var area = document.getElementById("vistaprevia");
  var text = area.value;
  var start = area.selectionStart;
  var end   = area.selectionEnd;
  e.preventDefault()

  area.value = text.substring(0, start) + e.target.closest("button").value + text.substring(end);
  document.activeElement.blur();
  
  num_char = e.target.closest("button").value.length;
  position = end + num_char;
  setCaretPosition('vistaprevia', position); // función para volver a ubicar el cursor en la posicion delante de la última inseción de texto tomada de: https://www.iteramos.com/pregunta/15635/establece-la-posicion-del-cursor-en-el-cuadro-de-texto-html 06/08/2020
  var text=document.getElementById("vistaprevia").value;
  $("#preview").text("\\("+text+"\\)");
  MathJax.startup.defaultPageReady();
}
 
function setCaretPosition(elemId, caretPos) {
	var elem = document.getElementById(elemId); 
	if(elem != null) { 
	if(elem.createTextRange) { 
	var range = elem.createTextRange(); 
	range.move('character', caretPos); 
	range.select(); 
	} 
	else { 
	if(elem.selectionStart) { 
	elem.focus(); 
	elem.setSelectionRange(caretPos, caretPos); }
	 else 
	 elem.focus(); 
	 } 
	} 
}

	
function ok(){
	var text=document.getElementById("vistaprevia").value;
	var main_text=document.getElementById("pregunta");
	var text_main = main_text.value;
	var start = main_text.selectionStart;
    var end   = main_text.selectionEnd;
	
	main_text.value = text_main.substring(0, start) + text + text_main.substring(end);
  
    num_char = text.length;
    position = end + num_char;
    setCaretPosition('pregunta', position);//función para volver a ubicar el cursor en la posicion delante de la última inseción de texto tomada de: https://www.iteramos.com/pregunta/15635/establece-la-posicion-del-cursor-en-el-cuadro-de-texto-html 06/08/2020
	}

window.onclick = function(event) {
  if (event.target.id == "SimbolosMatematicas") {
	mostrarPaleta();
  }
  else if (event.target.id == "cerrar" || event.target.id == "close"){
	ocultarPaleta();
	  }
	else if(event.target.id == "operadores" || event.target.id == "logicayconjuntos" || event.target.id == "simbolosgriegos" || event.target.id == "avanzado"){
     cambiarPaleta(event); 
		}
		else if (event.target.id == "ok"){
	     ok();
	  }
}
// funcion que se dispara con el evento onchange desde el area de texto 2
function vistaprevia(){
	var text=document.getElementById("vistaprevia").value;
  	$("#preview").text("\\("+text+"\\)");
  	MathJax.startup.defaultPageReady();
	}


