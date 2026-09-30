/* 
=============
Solution Code
=============
*/

function groupStudentsByGradeBand(students) {
    // Pre-define result object structure with empty arrays for each grade band
    const result = {
        A: [],
        B: [],
        C: [],
        F: []
    };

    // Iterate through each student object in the input array
    for (const student of students) {
        // Extract marks property from current student object
        const { marks } = student;

        // Categorize student into corresponding grade band based on marks
        if (marks >= 80) {
            result.A.push(student);
        } else if (marks >= 70) {
            result.B.push(student);
        } else if (marks >= 60) {
            result.C.push(student);
        } else {
            result.F.push(student);
        }
    }

    // Return the aggregated result object grouped by grades
    return result;
}

// ==========================================
// Test cases execution and verification
// ==========================================

const studentList = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 64 },
    { name: "David", marks: 45 },
    { name: "Emma", marks: 91 },
    { name: "Frank", marks: 68 }
];

const groupedResult = groupStudentsByGradeBand(studentList);
console.log("Grouped Students Result:", groupedResult);
