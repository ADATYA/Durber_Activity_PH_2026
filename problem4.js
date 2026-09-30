/* 
=============
Solution Code
=============
*/
function getPageMetadata(totalItems, pageSize, currentPage) {
    // Handle edge case when there are no items available
    if (totalItems === 0) {
        return {
            totalPages: 0,
            startItem: 0,
            endItem: 0,
            hasPrev: false,
            hasNext: false
        };
    }

    // Calculate total pages required by rounding up
    const totalPages = Math.ceil(totalItems / pageSize);
    
    // Calculate 1-based index for the first item on the current page
    const startItem = (currentPage - 1) * pageSize + 1;
    
    // Calculate 1-based index for the last item, capped at totalItems
    const endItem = Math.min(currentPage * pageSize, totalItems);
    
    // Check if there is a previous page
    const hasPrev = currentPage > 1;
    
    // Check if there is a next page
    const hasNext = currentPage < totalPages;

    // Return aggregated pagination metadata object
    return {
        totalPages,
        startItem,
        endItem,
        hasPrev,
        hasNext
    };
}

// Test cases for verification

// Example 1: Middle page scenario (Page 2 of 50 items with 10 items/page)
console.log("Example 1 (Page 2):", getPageMetadata(50, 10, 2));
/*
Output:
{
  totalPages: 5,
  startItem: 11,
  endItem: 20,
  hasPrev: true,
  hasNext: true
}
*/

// Example 2: Last page with leftover items (Page 3 of 25 items with 10 items/page)
console.log("Example 2 (Last Page):", getPageMetadata(25, 10, 3));
/*
Output:
{
  totalPages: 3,
  startItem: 21,
  endItem: 25,
  hasPrev: true,
  hasNext: false
}
*/

// Example 3: Empty item set
console.log("Example 3 (Empty Items):", getPageMetadata(0, 10, 1));
/*
Output:
{
  totalPages: 0,
  startItem: 0,
  endItem: 0,
  hasPrev: false,
  hasNext: false
}
*/