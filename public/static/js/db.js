// Database
const DATABASE_VERSION = 1;
const db = new Dexie("roocket");
db.version(DATABASE_VERSION).stores({
    products: '++id,title'
});