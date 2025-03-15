# Sorteo de Amigos Secretos

Este proyecto permite agregar amigos a una lista y luego realizar un sorteo aleatorio para determinar quién es el "amigo secreto". Además, se valida en tiempo real que los nombres ingresados sean válidos (solo letras y espacios), y el color del texto se cambia a rojo si el nombre no es válido.

## Funcionalidades

1. **Agregar amigos a la lista:**
   - Los amigos se agregan al hacer clic en un botón o presionando la tecla "Enter".
   - Los nombres deben cumplir con una validación: solo se permiten letras y espacios (sin espacios al inicio o al final).

2. **Sorteo de amigo secreto:**
   - Se puede realizar un sorteo aleatorio para elegir un amigo secreto de la lista.
   - Si la lista está vacía, se muestra un mensaje de error.
\
3. **Visualización de la lista:**
   - La lista de amigos se muestra en una lista ordenada (`<ul>`), y se actualiza automáticamente cada vez que se agrega un amigo.

## Estructura del Proyecto

Este proyecto está compuesto por los siguientes archivos:

- **index.html**: El archivo HTML principal que contiene la estructura de la página.
- **app.js**: El archivo JavaScript que maneja la lógica para agregar amigos, validar nombres, realizar el sorteo, y actualizar la lista visible.
- **style.css** (opcional): Si deseas agregar estilos personalizados, puedes incluir un archivo CSS.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Abre el archivo index.html en tu navegador para ver la aplicación en acción.

3. Puedes agregar amigos a la lista escribiendo su nombre y presionando "Enter" o haciendo clic en el botón para agregarlo.

4. Una vez que tengas amigos en la lista, haz clic en el botón para realizar el sorteo de amigo secreto.