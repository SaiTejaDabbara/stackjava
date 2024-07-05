document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveProfile();
});

function saveProfile() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    document.getElementById('resume-preview').innerHTML = <h2>${name}</h2>;
    document.getElementById('resume-preview').innerHTML = <h4>${contact}</h4>;
}

function addSection(sectionId) {
    const section = document.getElementById(sectionId);
    const entry = document.createElement('div');
    entry.className = 'entry';
    entry.innerHTML = `
        <input type="text" placeholder="Title">
        <input type="text" placeholder="Details">
        <button onclick="removeSection(this)">Remove</button>
    `;
    section.appendChild(entry);
}

function removeSection(button) {
    button.parentElement.remove();
}

function exportResume() {
    const preview = document.getElementById('resume-preview').innerHTML;
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,' + btoa(preview);
    link.download = 'resume.pdf';
    link.click();
}
function addSection() {
    var entryDiv = document.querySelector('.entry');
    if (!entryDiv.innerHTML) {
        var label = document.createElement('label');
        label.setAttribute('for', 'experienceInput');
        label.textContent = 'Your Experience:';
        
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'experienceInput';
        input.name = 'experienceInput';
        input.required = true;
        
        var submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        
        entryDiv.appendChild(label);
        entryDiv.appendChild(input);
        entryDiv.appendChild(submitButton);
    }
}


