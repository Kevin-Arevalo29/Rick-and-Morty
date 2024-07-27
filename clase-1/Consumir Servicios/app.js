<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <button id="mostar">
            Mostrar la info de la API
        </button>
        <div id="contenido"></div>
    </header>
     <script>
            document.getElementById('mostrar').addEventListener('click',mostrarDatosApi, true);
            let contenido = document.querySelector('#contenedor');

            function mostrarDatosApi(){
                fetch('https://randomuser.me/api/').then(res => res.json()).then(data =>{
                    console.log(data);
                })
            }
        </script>
</body>
</html>