function contactLoad() {
    const contentContainer = document.getElementById("content");
    
    while (contentContainer.firstElementChild) {
        contentContainer.firstElementChild.remove();
    }

    // Contact #1
    const contactBox = document.createElement("div");
    contactBox.classList.add("contactBox");

    const contactName = document.createElement("div");
    contactName.classList.add("contactName");
    contactName.textContent = "Place Holder";
    contactBox.appendChild(contactName);

    const contactDescription = document.createElement("div");
    contactDescription.classList.add("contactDescription");
    contactDescription.textContent = "CEO";
    contactBox.appendChild(contactDescription);

    const contactPhone = document.createElement("div");
    contactPhone.classList.add("contactDescription");
    contactPhone.textContent = "555-555-555";
    contactBox.appendChild(contactPhone);

    const contactMail = document.createElement("div");
    contactMail.classList.add("contactDescription");
    contactMail.textContent = "bla@blub.kuh";
    contactBox.appendChild(contactMail);

    // Contact #2
    const contactBox2 = document.createElement("div");
    contactBox2.classList.add("contactBox");

    const contactName2 = document.createElement("div");
    contactName2.classList.add("contactName");
    contactName2.textContent = "Muh Kuh";
    contactBox2.appendChild(contactName2);

    const contactDescription2 = document.createElement("div");
    contactDescription2.classList.add("contactDescription");
    contactDescription2.textContent = "Chef";
    contactBox2.appendChild(contactDescription2);

    const contactPhone2 = document.createElement("div");
    contactPhone2.classList.add("contactDescription");
    contactPhone2.textContent = "555-555-555";
    contactBox2.appendChild(contactPhone2);

    const contactMail2 = document.createElement("div");
    contactMail2.classList.add("contactDescription");
    contactMail2.textContent = "muhkuh@blub.kuh";
    contactBox2.appendChild(contactMail2);

    contentContainer.appendChild(contactBox);
    contentContainer.appendChild(contactBox2);
}

export { contactLoad };