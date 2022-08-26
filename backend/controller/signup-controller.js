
const signup = require("../model/signup")
const bcrypt = require("bcryptjs")
exports.signupUser = async (req, res) => {
    let {password} = req.body
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    try {
        const result = await signup.create({
            name: req.body.name,
            email: req.body.email,
            password
        })
        res.json({
            message: "add Data",
            success: true,
            data: result,
        }) 
    } catch (error) {    
        res.json({
            message: "error"+error,
        })
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const resutl = await signup.deleteMany()
        res.json({
            message: "delete Data",
            success: true,
            data:resutl
        })
       } catch (error) {
        res.json({
            message: "error"+error,
        })
       } 
    }