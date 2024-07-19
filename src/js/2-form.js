const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const loadFromLocalStorage = key => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error loading data from localStorage", error);
        return null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const savedData = loadFromLocalStorage('feedback-form-state');
    if (savedData) {
        form.email.value = savedData.email || "";
        form.message.value = savedData.message || "";
        formData.email = savedData.email || "";
        formData.message = savedData.message || "";
    }
});

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage('feedback-form-state', formData);
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const { email, message } = formData;
    
    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
});
