function resetData() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('gender').value = 'Select Gender';
    document.getElementById('weightClass').value = 'Select Weight Class';
    document.getElementById('squatOpener').value = '';
    document.getElementById('squatSecond').value = '';
    document.getElementById('squatLast').value = '';
    document.getElementById('benchOpener').value = '';
    document.getElementById('benchSecond').value = '';
    document.getElementById('benchLast').value = '';
    document.getElementById('deadliftOpener').value = '';
    document.getElementById('deadliftSecond').value = '';
    document.getElementById('deadliftLast').value = '';
}
resetData();

document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for the table
    const data = [
        { id: 1, firstName: 'John', lastName: 'Doe', gender: 'male', weightClass: '93 kg', squatOpener: 130, squatSecond: 140, squatLast: 150, benchOpener: 90, benchSecond: 100, benchLast: 110, deadliftOpener: 170, deadliftSecond: 180, deadliftLast: 190 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', gender: 'female', weightClass: '63 kg', squatOpener: 120, squatSecond: 130, squatLast: 140, benchOpener: 70, benchSecond: 75, benchLast: 80, deadliftOpener: 150, deadliftSecond: 160, deadliftLast: 170 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 3, firstName: 'Mike', lastName: 'Johnson', gender: 'male', weightClass: '105 kg', squatOpener: 110, squatSecond: 120, squatLast: 130, benchOpener: 85, benchSecond: 90, benchLast: 95, deadliftOpener: 160, deadliftSecond: 170, deadliftLast: 180 },
        { id: 4, firstName: 'Emily', lastName: 'Davis', gender: 'female', weightClass: '76 kg', squatOpener: 100, squatSecond: 110, squatLast: 120, benchOpener: 65, benchSecond: 70, benchLast: 75, deadliftOpener: 140, deadliftSecond: 150, deadliftLast: 160 },
    ];

    const weightClasses = {
        male: ['59 kg', '66 kg', '74 kg', '83 kg', '93 kg', '105 kg', '120 kg', '120 kg+'],
        female: ['47 kg', '52 kg', '57 kg', '63 kg', '69 kg', '76 kg', '84 kg', '84 kg+']
    };

    function showTable() {
        const maleTableBody = document.getElementById('maleTableBody');
        const femaleTableBody = document.getElementById('femaleTableBody');
        maleTableBody.innerHTML = '';
        femaleTableBody.innerHTML = '';
    
        const maleData = data.filter(item => item.gender === 'male');
        const femaleData = data.filter(item => item.gender === 'female');
    
        function calculateTotal(lifter) {
            return lifter.squatLast + lifter.benchLast + lifter.deadliftLast;
        }
    
        maleData.sort((a, b) => calculateTotal(b) - calculateTotal(a));
        femaleData.sort((a, b) => calculateTotal(b) - calculateTotal(a));
    
        function createRow(item, index) {
            const total = calculateTotal(item);
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td>${item.weightClass}</td>
                <td><input type="number" class="form-control" value="${item.squatOpener}" data-id="${item.id}" data-field="squatOpener"></td>
                <td><input type="number" class="form-control" value="${item.squatSecond}" data-id="${item.id}" data-field="squatSecond"></td>
                <td><input type="number" class="form-control" value="${item.squatLast}" data-id="${item.id}" data-field="squatLast"></td>
                <td><input type="number" class="form-control" value="${item.benchOpener}" data-id="${item.id}" data-field="benchOpener"></td>
                <td><input type="number" class="form-control" value="${item.benchSecond}" data-id="${item.id}" data-field="benchSecond"></td>
                <td><input type="number" class="form-control" value="${item.benchLast}" data-id="${item.id}" data-field="benchLast"></td>
                <td><input type="number" class="form-control" value="${item.deadliftOpener}" data-id="${item.id}" data-field="deadliftOpener"></td>
                <td><input type="number" class="form-control" value="${item.deadliftSecond}" data-id="${item.id}" data-field="deadliftSecond"></td>
                <td><input type="number" class="form-control" value="${item.deadliftLast}" data-id="${item.id}" data-field="deadliftLast"></td>
                <td>${total}</td>
                <td><button class="btn btn-danger btn-sm deleteBtn" data-id="${item.id}">Delete</button></td>
            `;
            return row;
        }
    
        maleData.forEach((item, index) => {
            maleTableBody.appendChild(createRow(item, index));
        });
    
        femaleData.forEach((item, index) => {
            femaleTableBody.appendChild(createRow(item, index));
        });
    
        document.getElementById('maleTableContainer').style.display = 'block';
        document.getElementById('femaleTableContainer').style.display = 'block';
        document.getElementById('addLifterButton').style.display = 'none';
        document.getElementById('addLifterForm').style.display = 'none';
    
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', updateData);
        });
    
        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', deleteLifter);
        });
    }

    function updateData(event) {
        const input = event.target;
        const id = parseInt(input.getAttribute('data-id'));
        const field = input.getAttribute('data-field');
        const value = parseInt(input.value);
        const lifter = data.find(item => item.id === id);
        if (lifter) {
            lifter[field] = value;
            showTable();
        }
    }

    function deleteLifter(event) {
        const button = event.target;
        const id = parseInt(button.getAttribute('data-id'));
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data.splice(index, 1);
            showTable();
        }
    }

    function showAddLifterButton() {
        document.getElementById('maleTableContainer').style.display = 'none';
        document.getElementById('femaleTableContainer').style.display = 'none';
        document.getElementById('addLifterButton').style.display = 'block';
        document.getElementById('addLifterForm').style.display = 'none';
    }

    function showAddLifterForm() {
        document.getElementById('maleTableContainer').style.display = 'none';
        document.getElementById('femaleTableContainer').style.display = 'none';
        document.getElementById('addLifterButton').style.display = 'none';
        document.getElementById('addLifterForm').style.display = 'block';
    }

    document.getElementById('dashboardLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.content h2').textContent = 'Dashboard';
        showTable();
    });

    document.getElementById('addLiftersLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.content h2').textContent = 'Add Lifters';
        showAddLifterButton();
    });

    document.getElementById('addLifterButton').addEventListener('click', function() {
        document.querySelector('.content h2').textContent = 'Add Lifters';
        showAddLifterForm();
    });

    document.getElementById('lifterForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const newLifter = {
            id: data.length + 1,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            gender: document.getElementById('gender').value,
            weightClass: document.getElementById('weightClass').value,
            squatOpener: document.getElementById('squatOpener').value,
            squatSecond: document.getElementById('squatSecond').value,
            squatLast: document.getElementById('squatLast').value,
            benchOpener: document.getElementById('benchOpener').value,
            benchSecond: document.getElementById('benchSecond').value,
            benchLast: document.getElementById('benchLast').value,
            deadliftOpener: document.getElementById('deadliftOpener').value,
            deadliftSecond: document.getElementById('deadliftSecond').value,
            deadliftLast: document.getElementById('deadliftLast').value
        };
        data.push(newLifter);
        showTable();
        document.querySelector('.content h2').textContent = 'Dashboard';
        resetData();
    });

    document.getElementById('gender').addEventListener('change', function() {
        const gender = this.value;
        const weightClassSelect = document.getElementById('weightClass');
        weightClassSelect.innerHTML = '<option value="">Select Weight Class</option>';
        if (gender) {
            weightClasses[gender].forEach(wc => {
                const option = document.createElement('option');
                option.value = wc;
                option.textContent = wc;                        
                weightClassSelect.appendChild(option);
            });
        }
    });

    showTable();
});