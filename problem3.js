/* 
=============
Solution Code
=============
*/
function generateProfileCard(user) {
    // Fall back to "Anonymous" if user or user.name is null/undefined
    const name = user?.name ?? "Anonymous";
    
    // Safely access nested city property, fallback to "Unknown" if missing
    const city = user?.address?.city ?? "Unknown";
    
    // Safely access nested followers count, fallback to 0 if missing
    const followers = user?.social?.followers ?? 0;

    // Return formatted profile card string
    return `${name} | ${city} | followers: ${followers}`;
}

// Test cases for verification

// Example 1: Complete user profile
const user1 = {
    name: "Alex",
    address: { city: "Dhaka" },
    social: { followers: 1500 }
};
console.log(generateProfileCard(user1));
// Output: Alex | Dhaka | followers: 1500

// Example 2: Partial user profile (missing address and social)
const user2 = {
    name: "John"
};
console.log(generateProfileCard(user2));
// Output: John | Unknown | followers: 0

// Example 3: Null or Empty user object
console.log(generateProfileCard(null));
// Output: Anonymous | Unknown | followers: 0