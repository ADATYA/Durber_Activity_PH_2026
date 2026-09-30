/* 
=============
Solution Code
=============
*/
function commonSkills(skills1, skills2) {
    // Convert first list to lowercase and store unique elements in a Set
    const set1 = new Set(skills1.map(skill => skill.toLowerCase()));
    
    // Convert second list to lowercase and store unique elements in a Set
    const set2 = new Set(skills2.map(skill => skill.toLowerCase()));
    
    const common = [];
    
    // Iterate through unique elements of set1 and check if present in set2
    for (const skill of set1) {
        if (set2.has(skill)) {
            common.push(skill); // Add to common list if present in both
        }
    }
    
    // Return the common skills array sorted alphabetically
    return common.sort();
}

// Test cases for verification

// Example 1: Case-insensitive matching and duplicate handling
const dev1 = ["JavaScript", "React", "Node", "Python"];
const dev2 = ["react", "PYTHON", "Java", "Docker"];
console.log("Example 1 (Common Skills):", commonSkills(dev1, dev2));
// Output: ["python", "react"]

// Example 2: No common skills
const dev3 = ["HTML", "CSS"];
const dev4 = ["C++", "Java"];
console.log("Example 2 (No Match):", commonSkills(dev3, dev4));
// Output: []

// Example 3: Completely identical lists with mixed casing
const dev5 = ["Git", "SQL"];
const dev6 = ["sql", "git"];
console.log("Example 3 (Identical Lists):", commonSkills(dev5, dev6));
// Output: ["git", "sql"]