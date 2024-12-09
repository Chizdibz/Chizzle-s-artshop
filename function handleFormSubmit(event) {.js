function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Validate that the user has selected an artwork
    const selectedArtwork = document.querySelector('input[name="artwork"]:checked');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Debugging: Log values to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Selected Artwork:", selectedArtwork);

    // Check if all fields are filled out
    if (!name || !email || !selectedArtwork) {
        alert('Please fill in all the required fields before submitting.');
        console.log("Validation failed: Missing required fields.");
        return false; // Prevent form submission if validation fails
    }

    // If everything is filled out, proceed
    const artwork = selectedArtwork.value;
    let fileUrl = '';

    // Set the file URL based on the selected artwork
    switch (artwork) {
        case 'artwork1':
            fileUrl = 'documents/artwork1.pdf'; // Replace with actual file URL
            break;
        case 'artwork2':
            fileUrl = 'documents/artwork2.pdf'; // Replace with actual file URL
            break;
        case 'artwork3':
            fileUrl = 'documents/artwork3.pdf'; // Replace with actual file URL
            break;
        case 'artwork4':
            fileUrl = 'documents/artwork4.pdf'; // Replace with actual file URL
            break;
        default:
            alert('No artwork selected.');
            console.log("No artwork selected.");
            return false; // Prevent form submission if no artwork is selected
    }

    // Debugging: Log the selected file URL
    console.log("File URL to be downloaded:", fileUrl);

    // Trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${artwork}.pdf`; // Download the artwork document as PDF
    link.click();

    // Optionally, you can redirect to a confirmation page after download
    window.location.href = 'confirmation.html'; // Redirect to confirmation page (optional)

    return true; // Allow form submission (or other actions) if successful
}