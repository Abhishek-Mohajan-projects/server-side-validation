const registerUser = (req, res) => {
    try{ 
        const {name, email, password, dob} = req.body;
        const newUser = {
            name, email, password, dob
        }
        return res.status(202).json({
            message: "user is created",
            newUser
        });
    } catch(error){
        res.status(404).send(error.message);
    };
};

const loginUser = (req, res) => {
    try{ 
        const { email, password } = req.body;
        if (email === "avimm079@gmail.com" && password === "12345") {
            return res.status(202).json({
                message: "user is logged In",
            })
        }
    } catch(error){
        res.status(404).send("email or password is wrong");
    };
}

module.exports = {registerUser, loginUser};
