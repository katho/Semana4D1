$(document).ready( function(){

    var arregloDeObjetos = [];//Arreglo de objetos post
    var numeroPost = 0;

    //console.log("Contenido : "+textoPost);
    
    $("button#addPost").on(
        "click", 
        function (event){

            var textoPost = $("#textoPost").val();
            console.log("Listo : "+textoPost);
            //Si hay contenido que publicar

            var nuevoPost = {
                numero   : numeroPost,
                contenido: textoPost
            };

            if(textoPost !== "")
            {
                arregloDeObjetos[arregloDeObjetos.length] = nuevoPost;
                numeroPost++;
                //Obtener contenido html
                //var miHTML = $("div#posts").html();
                //console.log(miHTML);
                //Editar contenido html
                //var miHTML = $("div#posts").html("<h1>Hola</h1>");
                $("#posts").prepend(
                    '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-4">'+
                            '<img src="img/author1.jpg">'+
                            
                        '</div>'+
                        '<div class="col-4">'+
                                'Texto 1<br>'+
                                nuevoPost.numero+
                        '</div>'+                
                    '</div>'+
                    '<div class="row">'+
                            '<div class="col-12">'+
                             nuevoPost.contenido+
                    '</div>'+
                '</div>'+        
            '</div>'
                );
            }

            
            console.log(textoPost);
            
        });
});

