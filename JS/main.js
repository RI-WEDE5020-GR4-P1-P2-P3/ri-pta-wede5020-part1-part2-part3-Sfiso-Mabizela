document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.querySelector('form');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default submission for validation
            
            let isValid = true;
            let errorMessages = [];

            // Get form fields based on your IDs in enquiry.html
            const fullName = document.getElementById('fullname');
            const phone = document.getElementById('phone');
            const location = document.getElementById('location');
            const pickupTime = document.getElementById('pickup-time');
            const orderDetails = document.getElementById('orderdetails');

            // 1. Validate Full Name
            if (!fullName || fullName.value.trim() === '') {
                isValid = false;
                errorMessages.push('Full Name is required.');
            }

            // 2. Validate South African Phone Number (10 digits)
            const phoneRegex = /^[0-9]{10}$/;
            if (!phone || !phoneRegex.test(phone.value.trim())) {
                isValid = false;
                errorMessages.push('Please enter a valid 10-digit phone number (e.g., 0712345678).');
            }

            // 3. Validate Location Selection
            if (!location || location.value === '') {
                isValid = false;
                errorMessages.push('Please select a pickup or delivery location.');
            }

            // 4. Validate Order Details
            if (!orderDetails || orderDetails.value.trim() === '') {
                isValid = false;
                errorMessages.push('Please specify your food order or inquiry details.');
            }

            // Output feedback
            if (!isValid) {
                alert('Please fix the following errors:\n\n- ' + errorMessages.join('\n- '));
            } else {
                alert('Success! Your pre-order/enquiry has been submitted to Lizzie’s Kitchen.');
                enquiryForm.reset(); // Reset form after successful validation
            }
        });
    }
});

// Dynamic Menu Search & Filter for Lizzie's Kitchen
const searchInput = document.getElementById('menuSearch');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Target each individual menu list item (<li>) inside your menu lists
        const menuItems = document.querySelectorAll('#service ul li, section ul li');

        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm) || searchTerm === '') {
                item.style.display = ''; // Show matching food item
            } else {
                item.style.display = 'none'; // Hide non-matching item
            }
        });
    });
}