import express, { Router, Request, Response } from "express";
// import { addToMyList } from "../controller/movieController";
import { registerUser,loginUser } from "../controller/userController";
import { MovieModel,Movie } from "../model/movie";
import { addMovie, addTVShow, removeMovie } from "../controller/movie&tvshowController";
import { addToMyList,removeFromMyList,getAllFromMyList } from "../controller/mylistController";

const router: Router = express.Router();

router.post('/registeruser',registerUser)
router.post('/loginuser',loginUser)

router.post('/addmovie',addMovie);
router.delete('/deletemovie/:id',removeMovie);

router.post('/addtvshow',addTVShow);

 



export default router;


