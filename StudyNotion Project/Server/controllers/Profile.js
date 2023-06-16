//profile need not be created as hamne ek dummy profile user ke signup ke time create kar di thi
//initializing them with "" 
//hence, now we need to just update them

const Profile = require('../models/Profile');
const User = require('../models/User');

exports.updateProfile = async (req, res) => {
    try {
        //if the user is logged in, means by auth middleware, the request already has the decoded token
        //and the token contains, email, accountType, userid
        //we can use the userid to find the user in the database
        const {dateOfBirth = "", about="", contactNumber, gender} = req.body;

        const id = req.user.id;

        //validating the data
        if (!contactNumber || !gender) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields',
            });
        }
            
        //updating the profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;

        const updatedProfile = await Profile.findByIdAndUpdate(
            {_id : profileId},
            {
                dateOfBirth,
                about,
                contactNumber,
                gender
            },
            {new : true}
        );

        return res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: updatedProfile,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

//delete account
exports.deleteAccount = async (req, res) => {
    try {
        const id = req.user.id;

        //validation
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;

        if(!userDetails || !profileId){
            return res.status(400).json({
                success: false,
                message: 'User not found',
            });
        }

        //delete the profile
        await Profile.findByIdAndDelete(profileId);

        //now unenroll the user from all the courses
        //get the courses enrolled by the user
        const coursesEnrolled = userDetails.courses;
        //for each course, find the user and remove it from the list
        coursesEnrolled.forEach(async (courseId) => {
            await Course.findByIdAndUpdate(
                {_id : courseId},
                {$pull : {usersEnrolled : id}},
                {new : true} 
            );
        });


        //finally, scheduling the deleting of the user after 3 days
        //we are not deleting the user directly, because we want to give the user a chance to undo the deletion
        //hence, we are scheduling the deletion after 3 days
        //we are using setTimeout function to schedule the deletion

        //first, we need to get the user again, because we need the createdAt field
        // TODO : 
        setTimeout(async () => {
            //get the user again
            const user = await User.findById(id);

            //if the user is null, means the user has already been deleted
            //hence, we need not do anything
            if(!user){
                return;
            }

            //if the user is not null, means the user has not been deleted
            //hence, we need to delete the user
            await User.findByIdAndDelete(id);

        }, 3 * 24 * 60 * 60 * 1000); //3 days


        return res.status(200).json({
            success: true,
            message: 'Account deleted successfully',
            data: deletedUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}


exports.getAllUserDetails = async (req, res) => {
    try {
        //get the id of the user
        const id = req.user.id;

        //find the user details
        const userDetails = await User.findById(id).populate('additionalDetails').exec();

        //if no user found
        if(!userDetails){
            return res.status(400).json({
                success: false,
                message: 'No user found',
            });
        }

        //if users found
        return res.status(200).json({
            success: true,
            message: 'User found',
            data: userDetails,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}