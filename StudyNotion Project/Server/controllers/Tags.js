const Tag = require('../models/Tag');

//create Tag ka handler function

exports.createTag = async (req, res) => {
    try {
        const {name, description} = req.body;

        //fetch data 

        //not adding konse course ka tag hai, as when we will create a course, we will add the tag to the course
        // and update the tag object with the course id

        //validation
        if(!name || !description){
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields',
            });
        }

        //create an entry in the DB
        const tagDetails = await Tag.create({
            name,
            description,
        });
        console.log(tagDetails);

        return res.status(200).json({
            success: true,
            message: 'Tag created successfully',
            data: tagDetails,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

exports.showAllTags = async (req, res) => {
    try {
        const allTags = await Tag.find({}, {name : true, description : true});
        //by adding this second argument, we are telling the DB to return only the name and description of the tag

        console.log(allTags);

        return res.status(200).json({
            success: true,
            message: 'All Tags fetched successfully',
            data: allTags,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }

}