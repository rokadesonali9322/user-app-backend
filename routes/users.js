const express=require("express");

const router=express.Router();

// get all users data
router.get("/",require("./../controllers/users").getUsers);

// get all users data
router.get("/:userId",require("./../controllers/users").getOneUsers);


// to save the users data
router.post("/",require('./../controllers/users').saveUsers);

// update the  existing users data
router.put("/:userId",require('./../controllers/users').updateUsers);

// // to delete the users data
router.delete('/:userId',require("./../controllers/users").deleteUsers);
// // to delete the users data


// get all users data
router.get("/serch/:name",require("./../controllers/users"). serchUser);


module.exports=router;