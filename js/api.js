document.addEventListener('DOMContentLoaded', () => {

    function traerDatos() {
        fetch('https://www.dnd5eapi.co/api/monsters')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Maneja los datos recibidos de la API y obtener la URL

                data.results.forEach(function (moustro) {
                    let url = "https://www.dnd5eapi.co" + moustro.url;
                    mostrarData(url);
                });
            })
            .catch(function (error) {
                console.error('Error al cargar los datos:', error);
            })
    }

    function mostrarData(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                ; // Verifica la estructura de los datos para acceder a las propiedades correctas

                // Maneja los datos recibidos de la API y construye la tabla
                let tabla = document.getElementById('listaMoustros');
                let fila = document.createElement('tr');
                let nombre = document.createElement('td');
                let tipo = document.createElement('td')
                let puntosVida = document.createElement('td');
                let fuerza = document.createElement('td')
                let destreza = document.createElement('td')
                let constitucion = document.createElement('td')
                let inteligencia = document.createElement('td')
                let sabiduria = document.createElement ('td')
                let charisma = document.createElement ('td')
                let claseArmadura = document.createElement('td')
                let alineamiento = document.createElement('td')
                let imagen =document.createElement('td')
                let img = document.createElement('img')

                nombre.textContent = data.name;// Accede a la propiedad 'name' del objeto 'data'
                tipo.textContent = data.type;   
                puntosVida.textContent = data.hit_points; 
                fuerza.textContent = data.strength;
                destreza.textContent = data.dexterity;
                constitucion.textContent = data.constitution;
                inteligencia.textContent = data.intelligence;
                sabiduria.textContent = data.wisdom;
                charisma.textContent = data.charisma;
                claseArmadura.textContent= data.armor_class[0].value;
                alineamiento.textContent = data.alignment;
                if(data.image){
                    img.src = "https://www.dnd5eapi.co" + data.image;
                    img.alt = data.name;
                    imagen.appendChild(img);
                }else if (!data.image){
                    img.src = "https://cdn-icons-png.flaticon.com/256/218/218151.png"
                    img.alt =data.name
                    imagen.appendChild(img);
                }
                

                fila.appendChild(nombre);
                fila.appendChild(tipo)
                fila.appendChild(puntosVida);
                fila.appendChild(fuerza);
                fila.appendChild(destreza)
                fila.appendChild(constitucion)
                fila.appendChild(inteligencia)
                fila.appendChild(sabiduria)
                fila.appendChild(charisma)
                fila.appendChild(claseArmadura)
                fila.appendChild(alineamiento)
                fila.appendChild(imagen)

                tabla.appendChild(fila);
            })
            .catch(function (error) {
                console.error('Error al cargar los datos:', error);
            });
    }

    traerDatos();
});


