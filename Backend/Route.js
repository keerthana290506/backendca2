const express = require('express')
const router = express.Router()

const users = [
    {email:"alice@example.com",password:"1234"},
    {email:"bob@example.com",password:"bob123"},
    {email:"charlie@example.com",password:"charlie123"}
]

router.put("/", (req, res) => {
    const { user } = req.query; 
    const { newPassword } = req.body; 

    const findUser = users.find(u => u.email === user);
    if (!findUser) {
        return res.status(400).json({ message: "Email does not exist" });
    }

   
    findUser.password = newPassword;
    return res.status(200).json({ message: "Password updated successfully", data: findUser });
});


router.delete("/",async(req,res)=>{
    const {user} = req.query;
    const findindex = users.findIndex((u)=>u.email===user)
    if(findindex == -1){
        return res.status(400).json({message:"user not found"})
    }
    const deleted = users.splice(findindex,1)[0]
    return res.status(200).json({message:"deleted successfully ",data:deleted})
})







module.exports = router;
