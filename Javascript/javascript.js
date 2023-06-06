let testScores = 88
let grade;
let result;

if (testScores > 100) {
    console.log("Points not valid")
}else if (testScores > 60 && testScores < 101) {
    console.log(result = "Pass");
    if (testScores >= 90) {
        grade = `A of ${testScores} points`;
    } else if (testScores >= 80) {
        grade = `B of ${testScores} points`;
    } else if (testScores >= 70) {
        grade = `C of ${testScores} points`;
    } else if (testScores >= 60) {
        grade = `D of ${testScores} points`; 
    }
    console.log(grade);
} else {
    console.log(result = "FAIL");
    console.log(`${testScores} points`)
}
