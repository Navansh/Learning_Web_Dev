const express = require("express");
const router = express.Router();

// Import the Controllers
//Profile Controllers
const { updateProfile, getAllUserDetails, deleteAccount, getEnrolledCourses, updateDisplayPicture } = require("../controllers/Profile");

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/auth");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Update Profile
router.post("/updateProfile", auth, updateProfile);

// Get All User Details
router.get("/getAllUserDetails", auth, getAllUserDetails);

// Delete Account
router.post("/deleteAccount", deleteAccount);

router.post("/updateDisplayPicture", auth, updateDisplayPicture);

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
module.exports = router;

