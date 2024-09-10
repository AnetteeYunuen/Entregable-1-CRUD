
use('monoliticos');
db.createCollection('productos');
db.createCollection('colores');
db.createCollection('zapatos');

use('monoliticos');
db.productos.insertOne({'id':1, 'nombre':'producto 1', 'precio': 200});
db.productos.insertOne({'id':2, 'nombre':'producto 2', 'precio': 400});
db.productos.insertOne({'id':3, 'nombre':'producto 3', 'precio': 800});

use('monoliticos');
db.colores.insertMany([
                        {'id': 1, 'color': 'azul', 'precio': 10},
                        {'id': 2, 'color': 'rosa', 'precio': 12},
                        {'id': 3, 'color': 'verde', 'precio': 8}
]);

use('monoliticos');
db.zapatos.insertMany([
                        {'id': 1, 'marca': 'adidas', 'precio': 1000},
                        {'id': 2, 'marca': 'nike', 'precio': 1200},
                        {'id': 3, 'marca': 'vans', 'precio': 800}
]);