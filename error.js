try {
    //code that might fall goes here
    let result = 10 / 2;
    console.log(result);
    console.log("This line will NOT run");
} catch (error) {
    //This runs ONLY if something goes wrong
    console.log("An error occured: " + err.message + " " + err.name);
}

console.log("The program continues here");

function LoadUserData(userid) {
    console.log("Starting to load data...");
    try{
        if (userid <= 0) {
            throw new Error("User ID must be greater than 0");
        }
        console.log("Data loaded for user:" + userid);
    }catch (error) {
        console.log("Failed:" + error.message);
    }finally {
        console.log("Loading Complete. Closing Connection."); //Always runs
    }
}

LoadUserData(5); //Data loaded for user: 5 --> Loading complete.
LoadUserData(-1); //Failed: uaer ID must be... --> Loading complete.

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if(age < 16 || age > 60) {
           throw new Error("age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Registration failed: " + error.message);
    }
}
registerStudent("Bola Okafor", 22); //Student registered: Bola Okafor, Age: 22
registerStudent("", 22);           //Regsiteration failed: Name cannot be empty!
registerStudent("Kemi", 12);       //Regsiteration failed: Age must be betweem 16 and 60