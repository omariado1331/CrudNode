import { createPool } from "mysql2/promise";
//archivo de configuración para conectar con la base de datos
const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'Prueba01'
});

export default pool;