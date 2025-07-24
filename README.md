# 📋 Sistema de Registro de Usuarios

Un formulario de registro interactivo desarrollado con **HTML5**, **CSS3** y **JavaScript ES6+** que implementa validación con expresiones regulares, almacenamiento local con localStorage y arquitectura MVC modular.

## 🎯 Características Principales

- ✅ **Validación de formularios** con expresiones regulares
- 💾 **Almacenamiento persistente** con localStorage
- 🏗️ **Arquitectura MVC** (Modelo-Vista-Controlador)
- 📦 **Módulos JavaScript ES6+**
- 🎨 **Interfaz moderna** con animaciones CSS
- 📱 **Diseño responsivo**
- ♿ **Accesibilidad** mejorada

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | - | Estructura semántica |
| CSS3 | - | Estilos y animaciones |
| JavaScript | ES6+ | Lógica de aplicación |
| LocalStorage | - | Persistencia de datos |

## 📁 Estructura del Proyecto

```
proyecto-front-grupo-uribe/
│
├── 📄 index.html          # Estructura HTML del formulario
├── 🎨 styles.css          # Estilos CSS y animaciones
├── ⚙️ script.js           # Lógica JavaScript modular
├── 📁 helpers/            # Utilidades para validación de formularios
│   ├── validators.js      # Funciones de validación
│   └── regex-patterns.js  # Expresiones regulares
└── 📖 README.md           # Documentación del proyecto
```

## 🏗️ Arquitectura MVC

### 📊 Modelo (Model)
- Manejo de arreglos de datos de usuarios
- Operaciones CRUD con localStorage
- Gestión de la estructura de datos en memoria

### 👁️ Vista (View)
- Interfaz de usuario en HTML/CSS
- Formulario de registro interactivo
- Feedback visual de validación
- Animaciones de fondo dinámicas

### 🎮 Controlador (Controller)
- Gestión de eventos del formulario
- Coordinación entre Modelo y Vista
- Lógica de negocio y procesamiento de datos
- Integración con helpers de validación

### 🛠️ Helpers (Utilidades)
- Funciones de validación de formularios con expresiones regulares
- Patrones de validación para cada campo del formulario
- Utilidades de formateo y limpieza de datos
- Mensajes de error personalizados


## 📋 Campos del Formulario

| Campo | Tipo | Validación | Requerido |
|-------|------|------------|-----------|
| **Nombre** | `text` | Solo letras y espacios | ✅ |
| **Apellido** | `text` | Solo letras y espacios | ✅ |
| **Documento** | `text` | Números únicamente | ✅ |
| **Teléfono** | `tel` | Formato telefónico | ✅ |
| **Género** | `select` | Opciones predefinidas | ✅ |
| **Hobbies** | `checkbox` | Múltiple selección | ❌ |

## 🔍 Expresiones Regulares Implementadas

```javascript
// helpers/regex-patterns.js
const REGEX_PATTERNS = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
    documento: /^\d{6,12}$/,
    telefono: /^(\+57\s?)?[3][0-9]{9}$|^[0-9]{7,10}$/
};
```

### Patrones de Validación

- **Nombre/Apellido**: Solo letras, acentos, ñ y espacios (2-30 caracteres)
- **Documento**: Solo números (6-12 dígitos)
- **Teléfono**: Formato colombiano con/sin código país (+57)

## 🛠️ Funciones Helper

```javascript
// helpers/validators.js
export const validateField = (field, value) => {
    const pattern = REGEX_PATTERNS[field];
    return pattern ? pattern.test(value) : false;
};

export const getErrorMessage = (field) => {
    const messages = {
        nombre: 'El nombre debe contener solo letras y espacios (2-30 caracteres)',
        apellido: 'El apellido debe contener solo letras y espacios (2-30 caracteres)',
        documento: 'El documento debe contener solo números (6-12 dígitos)',
        telefono: 'Ingrese un número telefónico válido'
    };
    return messages[field] || 'Campo inválido';
};
```

## 💾 Almacenamiento LocalStorage

### Estructura de Datos
```javascript
{
    "usuarios": [
        {
            "id": "timestamp_unique",
            "nombre": "Juan",
            "apellido": "Pérez",
            "documento": "12345678",
            "telefono": "3001234567",
            "genero": "masculino",
            "hobbies": ["leer", "deportes"],
            "fechaRegistro": "2025-07-24T10:30:00.000Z"
        }
    ]
}
```

### Operaciones CRUD
- **Create**: Agregar nuevo usuario
- **Read**: Obtener lista de usuarios
- **Update**: Actualizar datos existentes
- **Delete**: Eliminar registros

## 🎨 Características de Diseño

### Animaciones CSS
- Elementos flotantes en movimiento continuo
- Múltiples capas de símbolos animados
- Efectos de hover en botones
- Transiciones suaves

### Paleta de Colores
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #1a252f;
    --background-color: #f5f5f5;
    --text-color: #333333;
    --border-color: #cccccc;
}
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jaimezzapata/proyecto-front-grupo-uribe.git

# Navegar al directorio
cd proyecto-front-grupo-uribe
```

### Uso
1. Completar todos los campos requeridos
2. El sistema validará automáticamente cada campo
3. Seleccionar género del menú desplegable
4. Elegir hobbies
5. Hacer clic en "Registrar"
6. Los datos se guardarán en localStorage

## 📱 Responsive Design

```css
/* Breakpoints */
@media (max-width: 768px) {
    .formulario {
        padding: 1.5rem;
        margin: 1rem;
    }
}

@media (max-width: 480px) {
    .formulario {
        padding: 1rem;
    }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit los cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jaime Zapata**
- GitHub: [@jaimezzapata](https://github.com/jaimezzapata)
- Proyecto: [proyecto-front-grupo-uribe](https://github.com/jaimezzapata/proyecto-front-grupo-uribe)

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Abrir un [Issue](https://github.com/jaimezzapata/proyecto-front-grupo-uribe/issues)
- Contactar al desarrollador

---

⭐ **¡No olvides dar una estrella si te gustó el proyecto!** ⭐
