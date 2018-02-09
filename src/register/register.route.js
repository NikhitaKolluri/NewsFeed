function route($stateProvider)
{
    $stateProvider.state("register",{
        url:"/register",
        template:require("./register.html"),
        controller:"RegisterController",
        controllerAs:"regCtrl"
    });
}
route.$inject=["$stateProvider"];
export default route;