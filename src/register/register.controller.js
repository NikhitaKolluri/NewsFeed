class RegisterController{
    constructor()
    {
      this.name=""
      this.email="";
      this.password="";
      this.repassword="";
    }
    doReg(){
        console.log(this.name);
      console.log(this.email);
      console.log(this.password);
    }
  }
  export default RegisterController;