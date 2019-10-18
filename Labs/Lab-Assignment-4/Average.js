function average(n, q1, q2, q3) {

    result = {};
    
    /*  The value of i must be 0 (zero) not 1,
        since we want to start from the first index of the array  */
   for (var i = 0; i < n.length; i++) {
    /*  To calculate the average of the quizzes we must first 
        enclose it in parenthesis, due to order of operations */   
    result[n[i]] = (q1[i] + q2[i] + q3[i]) / 3;

    }

    return result;

}

names = ["Ian", "Adrian", "Daniel", "Malcolm", "Roberson", "William", "Yousif", "Nicholas"];
quiz1 = [100, 100, 100, 100, 100, 100, 100, 100];
quiz2 = [90, 90, 90, 90, 90, 90, 90,100];
quiz3 = [90, 80, 70, 60, 50, 40, 30,100];
/*  Quiz grades for Nicholas needed to be 
    added manually in order for his average grade to amount to 100. */
quiz2[7]=100;
quiz3[7]=100;

students = average(names, quiz1, quiz2, quiz3);

console.log(students);