function updatePreview() {
    var imageInput = document.getElementById('id_image');
    var textInputTitle = document.getElementById('id_title');
    var alignmentSelectTitle = document.getElementById('id_title_align');
    var fontSelectTitle = document.getElementById('id_title_font');
    var colorInput = document.getElementById('id_colour');
    var previewCard = document.getElementById('previewCard');
    var textInputText = document.getElementById('id_description');
    var alignmentSelectText = document.getElementById('id_description_align');
    var fontSelectText = document.getElementById('id_description_font');
    var titleTextElement = previewCard.querySelector('.title-text');
    var descriptionTextElement = previewCard.querySelector('.description-text');
    var errorText = previewCard.nextElementSibling;
    var cropImage = document.querySelector('.crop-image');


    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            previewCard.style.backgroundImage = `url('${e.target.result}')`;
            cropImage.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    textInputText.addEventListener('input', function() {
        var lines = textInputText.value.split('\n');
        if (lines.length > 4) {
            textInputText.value = lines.slice(0, 4).join('\n');
        }
    });

    titleTextElement.style.textAlign = alignmentSelectTitle.value;
    titleTextElement.style.fontFamily = fontSelectTitle.value;
    descriptionTextElement.style.textAlign = alignmentSelectText.value;
    descriptionTextElement.style.fontFamily = fontSelectText.value;
    titleTextElement.textContent = textInputTitle.value;
    descriptionTextElement.textContent = textInputText.value;
    previewCard.style.color = colorInput.value;


    descriptionTextElement_new = descriptionTextElement.scrollWidth - 5
    title_overlimit = titleTextElement.scrollWidth > titleTextElement.offsetWidth
    text_overlimit = descriptionTextElement_new > descriptionTextElement.offsetWidth

    if (title_overlimit || text_overlimit ) {
        errorText.style.display="flex"
    } else {
        errorText.style.display="none"
    }
}


document.getElementById('id_image').addEventListener('change', updatePreview);
document.getElementById('id_title').addEventListener('input', updatePreview);
document.getElementById('id_title_align').addEventListener('input', updatePreview);
document.getElementById('id_title_font').addEventListener('input', updatePreview);
document.getElementById('id_description').addEventListener('input', updatePreview);
document.getElementById('id_description_align').addEventListener('input', updatePreview);
document.getElementById('id_description_font').addEventListener('input', updatePreview);
document.getElementById('id_colour').addEventListener('input', updatePreview);

updatePreview();
