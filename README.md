# Web
React JS - Docker - HTML - SCSS 

# Indicaciones Previas
Instalar Docker (Desktop para windows - activar el WSL)
Para este caso 1 contenedor = 1 servicio, pero en estricto no lo es.

# Generación Contenedores de Desarrollo
Ejecutar Docker-Compose -f Docker-compose.dev.yml up -d

# Generación de Imagen y Contenedores de Producción
Ejecutar Docker-Compose -f Docker-compose.prod.yml up -d

# Validar Contenedores Creados
Ejecutar Docker-compose ps

# Recrear Imagenes
Ejecutar Docker-compose build

# Validar procesos de los Contenedores
Ejecutar Docker-compose -f Docker-compose.dev.yml top

# Detener Contenedor en específico
Ejecutar Docker-compose stop contenedorX

# Revisar Logs de la creación de Contenedores
Ejecutar Docker-compose logs

# Escalar Contenedores de Producción (Tener en cuenta los puertos en el archivo yaml -> ports: - "X000-X005:X000")
Ejecutar Docker-Compose -f Docker-compose.prod.yml up -d --scale servicio=3

