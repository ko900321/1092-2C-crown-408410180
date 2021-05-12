const db = require('../utils/database');

const Category_80 = class Category{
    constructor(id, name, size ,remote_url, local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }
    //read
    static fetchAll(){
        return db.execute('SELECT * from category_80');
    }
}

module.exports = Category_80;