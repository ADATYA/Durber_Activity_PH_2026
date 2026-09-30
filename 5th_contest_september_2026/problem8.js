/* 
=============
Solution Code
=============
*/
function simulateTicketQueue(commands) {
    // Array to maintain the ordered queue of waiting persons
    const queue = [];
    
    // Array to store the list of served persons in order
    const served = [];
    
    // Set for fast O(1) lookup to check duplicates and presence in queue
    const queueSet = new Set();

    // Iterate through each command provided
    for (const command of commands) {
        if (command.startsWith("join ")) {
            // Extract person name from "join [name]" command
            const name = command.slice(5);
            
            // Add to queue only if person is not already in queue
            if (!queueSet.has(name)) {
                queue.push(name);
                queueSet.add(name);
            }
        } else if (command.startsWith("leave ")) {
            // Extract person name from "leave [name]" command
            const name = command.slice(6);
            
            // If person exists in queue, remove them from both queue and set
            if (queueSet.has(name)) {
                const index = queue.indexOf(name);
                if (index !== -1) {
                    queue.splice(index, 1);
                }
                queueSet.delete(name);
            }
        } else if (command === "serve") {
            // Serve the first person at the front of the queue if queue is not empty
            if (queue.length > 0) {
                const person = queue.shift();
                queueSet.delete(person);
                served.push(person);
            }
        }
    }

    // Return the final state of remaining queue and served list
    return { queue, served };
}

// ==========================================
// Test cases execution and verification
// ==========================================

const commands = [
    "join Alice",
    "join Bob",
    "join Charlie",
    "serve",         // Serves Alice
    "leave Bob",      // Bob leaves the queue
    "join David",
    "join Alice",     // Alice joins again after being served
    "serve"          // Serves Charlie
];

const result = simulateTicketQueue(commands);
console.log("Queue Simulation Result:", result);