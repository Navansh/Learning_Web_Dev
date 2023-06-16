const Category = require('../models/Category');

//create Category ka handler function

exports.createCategory = async (req, res) => {
    try {
        const {name, description} = req.body;

        //fetch data 

        //not adding konse course ki category hai, as when we will create a course, we will add the category to the course
        // and update the category object with the course id

        //validation
        if(!name || !description){
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields',
            });
        }

        //create an entry in the DB
        const categoryDetails = await Category.create({
            name,
            description,
        });
        console.log(categoryDetails);

        return res.status(200).json({
            success: true,
            message: 'Category created successfully',
            data: categoryDetails,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

exports.showAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find({}, {name : true, description : true});
        //by adding this second argument, we are telling the DB to return only the name and description of the category

        console.log(allCategories);

        return res.status(200).json({
            success: true,
            message: 'All Categories fetched successfully',
            data: allCategories,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }

}