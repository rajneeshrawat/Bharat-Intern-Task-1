// script.js

function submitForm() {
    const title = document.getElementById('entryTitle').value;
    const content = document.getElementById('entryContent').value;
    const image = document.getElementById('entryImage').files[0];
    const video = document.getElementById('entryVideo').files[0];

    if (!title || !content) {
        alert('Please fill in both title and content fields.');
        return;
    }

    const submittedDataContainer = document.getElementById('submittedDataContainer');

    const newCard = document.createElement('div');
    newCard.classList.add('submitted-card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('submitted-card-header');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('submitted-card-title');
    cardTitle.innerText = title;

    cardHeader.appendChild(cardTitle);
    newCard.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.classList.add('submitted-card-body');

    const contentParagraph = document.createElement('p');
    contentParagraph.innerHTML = content;

    cardBody.appendChild(contentParagraph);

    if (image) {
        const imagePreview = document.createElement('img');
        imagePreview.src = URL.createObjectURL(image);
        imagePreview.classList.add('submitted-image');
        cardBody.appendChild(imagePreview);
    }

    if (video) {
        const videoPreview = document.createElement('video');
        videoPreview.src = URL.createObjectURL(video);
        videoPreview.controls = true;
        videoPreview.autoplay = true;
        videoPreview.classList.add('submitted-video');
        cardBody.appendChild(videoPreview);
    }

    newCard.appendChild(cardBody);
    submittedDataContainer.appendChild(newCard);

    clearForm();
}
