
 const UserModel=require("./../models/users")

exports.getUsers = async(req,res)=>{
    // res.json({"name":"sonali","age":"34"})
    const users = await UserModel.find();
    res.json(users);
 };

exports.getOneUsers = async(req,res)=>{
    const users = await UserModel.find({_id:req.params.userId});
    res.json(users);
};

exports.saveUsers = async(req,res)=>{
    const newUser = UserModel(req.body);
    res.send( await newUser.save())
};

exports.updateUsers = async(req,res)=>{
   UserModel.findByIdAndUpdate({_id:req.params.userId},req.body,
    {new:true},(err,data)=>{
        res.send(data)
    });
};

exports.deleteUsers=async(req,res)=>{
    UserModel.findOneAndDelete({_id:req.params.userId},
        (err,data)=>{
            res.send(data)
        });
};
exports.serchUser = async(req,res)=>{
    var regex=new RegExp(req.params.name,'i')
    const users = await UserModel.find({name:regex});
    res.json(users);
};


