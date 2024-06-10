class FamilyMember {
    constructor(role, name, details) {
        this.role = role;
        this.name = name;
        this.details = details;
    }
}

const family = [
    new FamilyMember('Father', 'Mr.Abdul Matin Mazumdar', 'He is the head of the family.'),
    new FamilyMember('Mother', 'Mrs. Mafia Begum', 'She is the heart of the family.'),
    new FamilyMember('Brother', 'Faruk Mazumdar', 'He is married.'),
    new FamilyMember('Brother', 'Arif Mazumdar', 'He is going to be married soon.'),
    new FamilyMember('Brother', 'Atik Mazumdar', 'He is a student of IUBAT CSE dept.')
];

function displayFamily(familyList) {
    const familyContainer = document.getElementById('familyContainer');
    familyContainer.innerHTML = ''; 
    familyList.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'family-member';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.textContent = `${member.role}: ${member.name}`;

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';
        detailsDiv.textContent = member.details;

        memberDiv.appendChild(nameDiv);
        memberDiv.appendChild(detailsDiv);
        familyContainer.appendChild(memberDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayFamily(family);

    const addMemberForm = document.getElementById('addMemberForm');
    addMemberForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const role = document.getElementById('role').value;
        const name = document.getElementById('name').value;
        const details = document.getElementById('details').value;

        const newMember = new FamilyMember(role, name, details);
        family.push(newMember);
        displayFamily(family);

        addMemberForm.reset(); 
    });
});
