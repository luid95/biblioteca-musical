# 🎵 Biblioteca Musical

Este proyecto es una aplicación básica en **React** que simula una biblioteca musical. Permite visualizar una lista de canciones con información como el título, el artista y la duración.

## 📚 Características
- Estructura basada en **componentes de clase**.
- Implementación del **ciclo de vida de React** con `componentDidMount()`.

## 🗒️ Tecnologías utilizadas
- React

## 🛠️ Instalación y uso

1. Clona este repositorio:
   ```sh
   git clone https://github.com/TU_USUARIO/biblioteca-musical.git
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd biblioteca-musical
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia la aplicación:
   ```sh
   npm start
   ```
5. Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

## 📚 Estructura del proyecto
```
  biblioteca-musical/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header.js
  │   │   └── Song.js
  │   ├── App.js
  │   ├── App.css
  │   └── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

## 🎧 Funcionalidad de los componentes

### **Header.js**
Muestra el título principal de la aplicación.

### **Song.js**
Muestra los detalles de cada canción como:
- 🎧 Nombre de la canción
- 🎤 Artista
- 🕒 Duración

### **App.js**
- Contiene la estructura principal de la aplicación.
- Importa y muestra los componentes `Header` y `Song`.
- Implementa el método `componentDidMount()` para mostrar un mensaje en la consola cuando la app se ha cargado correctamente.

## 📅 Licencia
Este proyecto se encuentra bajo la licencia MIT. 🌍

