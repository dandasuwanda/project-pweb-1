
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const idNumber = document.getElementById('idNumber').value;
        const roomType = document.getElementById('roomType').value;
        const checkInDate = document.getElementById('checkInDate').value;
        const duration = document.getElementById('duration').value;
        const breakfast = document.getElementById('breakfast').checked ? 'Termasuk' : 'Tidak Termasuk';

        // Display data in the form below
        document.getElementById('displayName').innerText = name;
        document.getElementById('displayGender').innerText = gender;
        document.getElementById('displayIdNumber').innerText = idNumber;
        document.getElementById('displayRoomType').innerText = roomType;
        document.getElementById('displayCheckInDate').innerText = checkInDate;
        document.getElementById('displayDuration').innerText = duration;
        document.getElementById('displayBreakfast').innerText = breakfast;

        // Show the displayed data
        document.getElementById('formDataDisplay').style.display = 'block';
    });