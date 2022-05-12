# Recuperar todos los artículos

GET /api/articles

Respuesta: 
- Status 200
- Format JSON
- Incluye un array de artículos

# Crear un artículo

POST /api/articles
Body 

Respuesta: 
- Respuesta correcta: status 200 y formato json
- Si en la respuesta se incluye el ID del nuevo artículo
- Si los datos que inserto se guardan en la BD

# Actualizar un artículo

PUT /api/articles/ARTICLEID
Body -> todos los datos que vamos a actualizar

Respuesta:
- Respuesta correcta: status 200 y format json
- Si en el articulo editado están los valores que hemos pasado para cambiar

# Borrar un artículo