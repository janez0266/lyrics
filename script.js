



var letra = []; 


function buscarCancion() {
    
    
    const newTitulo = document.getElementById("titulo").value;
    const newAutor = document.getElementById("autor").value;
    if(newAutor == "" || newTitulo == ""){
        swal("Algo salio mal!", "Debe colocar el autor y la cancion a buscar....", "success");
    }else {
        document.querySelector(".btn2").disabled = true;
        const url = `https://api.lyrics.ovh/v1/${newAutor}/${newTitulo}`
        console.log(url);        
        document.getElementById("contenido").innerHTML = "";
        document.getElementById("msg").innerHTML = "Espere..... Buscamos la Letra de la canción...";
        document.getElementById("mensaje").style.display = "block";
        
        fetch(url)
        .then(response =>response.json())
        .then(data => {
            letra = data;  
            mostrarLetra(letra, newAutor, newTitulo);
        })
        .catch(error => {
            document.getElementById("mensaje").style.display = "none";
            console.log("error =>", error);
            swal("Algo salio mal!", "Verifique el Autor y el Titulo y vuelva a intentar....", "success");
            document.querySelector(".btn2").disabled = false;
        }); 
    }
 }



function mostrarLetra(data, autor, titulo) {
    document.querySelector(".btn2").disabled = false;
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("artista").innerHTML = `<h1>Autor: ${autor} - Título: ${titulo}</h1>`;
    document.getElementById("contenido").setAttribute('style', 'white-space: pre;');
    document.getElementById("contenido").innerHTML = data['lyrics'];
    console.log(data['lyrics'])
    
}

function verAyuda() {
    document.getElementById("ayuda").style.display = "block";
}

function limpiar() {
    document.getElementById("formulario").reset();
    document.getElementById("contenido").innerHTML = "";
    document.getElementById("artista").innerHTML = "";
}

function cerrar() {
    document.getElementById("ayuda").style.display = "none";
}


  