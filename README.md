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
  │   │   ├── Header/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   │   ├── Library/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   │   ├── SearchBar/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   │   ├── SearchResults/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   │   ├── Song/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   │   ├── SongDetail/
  │   │        ├──index.js
  │   │        ├──styles.css
  │   ├── hooks/
  │   │    useFetch.js
  │   │
  │   ├── App.js
  │   ├── App.css
  │   └── index.js
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── README.md
```

## 🎧 Funcionalidad de los componentes

### **Header**

Muestra el título principal de la aplicación.

### **SearchBar**

Formulario (Input) para iniciar la busqueda por artista.

### **SearchResults**

Muestra resultados de la busqueda por artista.

### **Library**

Almacena o muestra los albumnes seleccionados por el usuario

### **Song.js**

Muestra los detalles de cada album como:

### **SongDetail.js**

Muestra a detalle de cada album en especifico como:

### **App.js**

- Contiene la estructura principal de la aplicación.

## 📅 Licencia

Este proyecto se encuentra bajo la licencia MIT. 🌍
