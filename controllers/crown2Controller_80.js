const Category_80 = require('../models/categoryModel_80');

exports.getHomepage = async(req, res) =>{
    let data;
    const [rows] = await Category_80.fetchAll();
    data=rows;
    //res.json(data);
    res.render('crown2_80', { 
    title: '408410180 黃礬玄(async/await)',
    data  
  });
}