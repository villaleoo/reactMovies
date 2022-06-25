                /////Navegacion entre componentes/////

SRC
***************************************************************************************************************************************************************************************************************************************************************************************************************************************************
                                        ////COMPONENTES////

Incluye 4 carpetas: content, header, sidebar y spinner:

componentes> content:

	Incluye 2 carpetas que actuan como contenedores del sitio (ItemListContainer, ItemDetailContainer)

    1)
	>ItemListContainer.jsx: es el index (raiz) del sitio, contiene un useEffect el cual llama a la funcion que conecta con las peliculas populares de la API utilizada. Ademas, filtra las peliculas a través de la recepcion de un estado el cual modifica el Sidebar.jsx.
				Se encarga de pasar mediante props a ItemList el arreglo de peliculas filtradas(ya sea por busqueda o por filtro de valoracion).
	>(hijo) ItemList.jsx: Recibe por props el arreglo de peliculas y mapea cada elemento del arreglo a traves de su hijo Item.jsx el cual recibe por props propiedades de cada uno de esos elementos.
	>(hijo) Item.jsx: Es una card que transforma cada objeto del arreglo de peliculas en una card visible para el usuario.Ademas cuenta con un boton que asocia el id de c/u de las peliculas y asi permite ver mas detalles del objeto (pelicula) seleccionado.	
   
    2)
	>ItemDetailContainer.jsx: es el contenedor de la vista detallada de cada una de las peliculas seleccionadas por el usuario. Contiene un useEffect el cual llama a la funcion que conecta con la peticion de obtener mas detalles de una pelicula en particular.
				Para identificar la pelicula seleccionada se le pasa a la funcion el id de la pelicula (id que itemDetailContainer obtiene mediante el hook useParams de react-router-dom (biblioteca), el cual lo captura gracias al componente Rutas.jsx y al boton del Item.jsx).
				Luego de obtener la pelicula, la funcion la guarda en un estado. itemDetailContainer recibe ese estado mediante el hook useContext y se lo pasa por props a su hijo ItemDetail.jsx .(para no generar una mala vista en la carga de peticiones a la API se agrego un componente Spinner).
	>(hijo) ItemDetail.jsx: Es el encargado de 'desglosar' ese objeto que recibe de su padre y muestra cada propiedad en una card con todos los detalles de la pelicula seleccionada.
****************************************************************************************************************************************************************************************************************************************************************************************************************************************************
componentes>header:

	Incluye un archivo Header.jsx quien es el contenedor de la barra de busqueda y del logo del sitio.

	>Header.jsx: obtiene del hook useContext una funcion(funcion 1) para recoger lo que el usuario escribe en la barra de busqueda y una funcion (funcion 2) que busca peliculas acorde a lo que el usuario escribe en la barra de busqueda.
		     Lo que la funcion 2 busca lo guarda en un estado, estado que (pasos mediante) sera recogido por ItemList para mostrar las peliculas que se encontraron acorde a lo que el usuario tipeo en la barra de busqueda y recogió la funcion 1.
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************
componentes>sidebar:
	
	Incluye un archivo Sidebar.jsx quien es el contenedor de los filtros que recaen sobre las peliculas (en este caso solo filtrado por valoracion) y un archivo sidebar.scss que le da estilos al anterior.

	>Sidebar.jsx: recoge de useContext un estado de formato array con 5 elementos, (son 5 porque la maxima valoracion es de 5 estrellas).Este lo que hace es cambiar el valor de c/u de esos elementos del estado alternando entre verdadero y falso. Valores que serviran para que el componente ItemListContainer aplique filtros a quienes encuentre como verdaderos(true).
******************************************************************************************************************************************************************************************************************************************************************************************************************************************************
componentes>spinner:
	
	Incluye un archivo Spinner.jsx y spinner.scss.

	>Spinner.jsx: se llama a este componente segun convenga cuando se ejecutan peticiones a la API con el fin de que se muestre este componente en pantalla el tiempo que demore en dar una respuesta la API.
******************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 				////CONTEXT////

Incluye un archivo GlobalPeliculasContext.jsx que contiene funciones de peticion a la API, funciones de eventos y estados de utilidad para los componentes.

>GlobalPeliculasContext.jsx actua como proveedor de estados y funciones a los componentes y es el componente que se comunica con la API.

*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************
			     ////ROUTES////

Incluye un archivo Rutas.jsx quien es el que permite "moverse" en el layout de un componente a otro, modificando la url del sitio. (aportado por biblioteca react-router-dom).

********************************************************************************************************************************************************************************************************************************************************************************************************************************************************
///App.js

Archivo donde recaen todos los componentes del SRC. En este caso compuesto por los componentes GlobalPeliculasContext, proveedor de los componentes y dentro de el Rutas.jsx que contiene el ruteo de todo el sitio.

***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
	///BIBLIOTECAS UTILIZADAS///

'React-router-dom' para la navegacion entre componentes.

Sass como preprocesador de css .

	
		    
