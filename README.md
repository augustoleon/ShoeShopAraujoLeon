# E-commerce ShoeShop
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##¿Que es este proyecto? 

Es un proyecto que simula una ***e-commerce*** donde encontrarás un catalogo de productos el cual podrás seleccionar, agregar una cantidad deseada del mismo producto y te permitira poder seguir añadiendo items de productos las veces que sean necesarias, cuando finalices la compra, podrás remover los productos que consideres no agregar a la orden final, una vez tomada la decisión de que producto llevar podrás generar la orden la cual te llevara a completar un formulario, dentro del mismo tendrás que completar todos los datos para que la orden pueda ser generada y bien así finalizada la compra. 

###Demo
https://drive.google.com/file/d/1I330mryIS9iiutBfB3rWGdAL-3Uv2_Dy/view?usp=sharing

## Dependencias necesarias

- react v 17.0.1
- react-dom v 17.0.1
- react-router-dom v 5.2.0
- firebase v 8.4.1
- boobstraps-icons v 1.4.0
- react-scripts v 4.0.3
- web-vitals v 1.1.0

## ¿Como esta hecho?

Está creada con distintos componentes que manejan una responsabilidad, utilice __bootstrap__ y __CSS__ para dar estilos y __Googlefonts__ para la tipografía.

- __NavBar:__  Incluye una barra de menú que contiene el nombre de la tienda y un listado de categorías clickeable, incorpore estilos desde boobstraps


- __CartWidget:__ Contiene el icono de Cart e indica cuando un producto está agregaro al carrito,es reactivo con el contexto, se encuentra dentro del NavBar. 
- __ItemCount:__ Incrementa y decrementa los productos a añadir en el carrito
- __Item:__ Es un componente destinado a mostrar información breve del producto que el user clickeara luego par acceder a los detalles 
- __ItemList:__ Es un agrupador de un set de componentes Item.js
- __ItemDetailContainer:__ Muestra la vista de detalle de un item, incluyendo precio, nombre del producto y foto. 
- __CartContext:__ Implemente React Context para mantener el estado de compra del user, al clickear en ItemDetail se debe guarda su cantidad en forma de objeto
__Cart:__  Contiene el desglose de la compra y el precio total

### Por otro lado... 

Configure una cuenta de ***firebase*** y cree un cloud de ***firestore*** 

**Por ultimo** agregue un componente ***Form*** que incluye el evento generarOrden la cual crea una colección nueva en firebase y se añade los datos que se encuentran dentro del formulario mostrado