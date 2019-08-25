package cybertek.utilities;

import cybertek.pages.CreateNewTask;
import cybertek.pages.LoginPage;
import cybertek.pages.ModulePage;

public class Pages {

    private LoginPage loginPage;
    private CreateNewTask createNewTask;
    private ModulePage modulePage;

    public LoginPage loginPage(){
        if(loginPage==null) {
            loginPage = new LoginPage();
        }
        return loginPage;
    }
    public CreateNewTask createNewTask(){
        if(createNewTask==null){
            createNewTask = new CreateNewTask();
        }
        return createNewTask;
    }
    public ModulePage modulePage(){
        if(modulePage==null){
            modulePage = new ModulePage();
        }
        return modulePage;
    }
}
