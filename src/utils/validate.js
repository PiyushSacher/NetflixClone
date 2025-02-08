export const checkValidData=(email,password)=>{
    const isValidEmail= /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    // if this regex will pass , it will return true in the variable else it will return false

    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // if this regex will pass , it will return true in the variable else it will return false

    if(!isValidEmail) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";
    return null;

}