import express from 'express';
import multer from 'multer';
import { addCourse, getEducatorCourses, updateRoleToEducator, getEnrolledStudentsData, educatorDashboardData } from '../controllers/educatorControllers.js';
import { protectEducator } from '../middlewares/authMiddleware.js';

const upload = multer({ dest: 'uploads/' });

const educatorRouter = express.Router();

// Add educator role
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse);
educatorRouter.get('/courses',protectEducator,getEducatorCourses)
educatorRouter.get('/dashboard',protectEducator,educatorDashboardData)
educatorRouter.get('/enrolled-students',protectEducator,getEnrolledStudentsData)

export default educatorRouter;
