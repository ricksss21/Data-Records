document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

    //get input values from the form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    //get the table body element
    const tableBody = document.getElementById('contactTable').getElementsByTagName('tbody')[0];

    //insert a new row at the end of the table
    const newRow = tableBody.insertRow();

    //insert new cells into the new row
    const cellName = newRow.insertCell(0);
    const cellPhone = newRow.insertCell(1);
    const cellEmail = newRow.insertCell(2);

    //add the text content to the new cells
    cellName.textContent = name;
    cellPhone.textContent = phone;
    cellEmail.textContent = email;

    ;// clear the form fields for the next entry
    document.getElementById('contactForm').reset();
})