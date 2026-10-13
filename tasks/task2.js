const averageGrade = 81;

switch (true) {
    case (averageGrade < 60):
        console.log("Unacceptable");
        break;
    case (averageGrade <= 70):
        console.log("Acceptable");
        break;
    case (averageGrade <= 80):
        console.log("Good");
        break;
    case (averageGrade <= 90):
        console.log("Very Good");
        break;
    case (averageGrade <= 100):
        console.log("Excellent");
        break;
}