var server = {
	path: null,
	obtenerRestaurantes: function(municipio, lat, lng, radio, categoria, div){
        var url = "http://localhost:8080/fondi/api/negocios/getNegociosRadio/"+municipio+"/"+lat+"/"+lng+"/"+radio+"/"+categoria
        
		 $.getJSON(url, function(data) {
          //var negocios = data.lstNegocios[0].codigo;
          //console.log('Codigo:', negocios);             
                $(data.lstNegocios).each(function() {
                    console.log('Codigo:', negocios);
               });       
       });
	},
	exito: function(listNegocios){
        console.log(listNegocios);
               
	   },
    parseRespuesta: function(data){
        
        
    }
    
};