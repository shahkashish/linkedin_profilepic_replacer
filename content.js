 const newProfilePicURL = chrome.runtime.getURL('new_profile_pic.png');//"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAQDBf/aAAwDAQACEAMQAAABMtjj1Lwoob//xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDEhEh/9oACAEBAAEFAq+iNqzI/iVTOj//xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEDEjL/2gAIAQMBAT8BsWejbH//xAAbEQACAQUAAAAAAAAAAAAAAAAAAQIDBBIUQf/aAAgBAgEBPwG3rPFzl02D/8QAGRABAAIDAAAAAAAAAAAAAAAAAQBRAhAh/9oACAEBAAY/AkhZO5MUo3//xAAbEAEBAQACAwAAAAAAAAAAAAABEQAhcTFBsf/aAAgBAQABPyEiz4hXDFPTTjvdt1k8QX4ZFq24Kc7/2gAMAwEAAgADAAAAEKfP/8QAGxEAAgEFAAAAAAAAAAAAAAAAAREAMWFxgbH/2gAIAQMBAT8QIIApPeRSXeT/xAAcEQABAwUAAAAAAAAAAAAAAAABABEhMYGh0fD/2gAIAQIBAT8QqwMuunmWydr/xAAdEAEAAwACAwEAAAAAAAAAAAABABEhUWExcaHB/9oACAEBAAE/EG9N9IuP7MwdfJOntyH2N1b1toRWaStdpeSwtYBNlrmf/9k="; // Path to the new profile picture

function replaceProfilePictures() {
  const profilePics = document.querySelectorAll('img');

  profilePics.forEach(pic => {
    if (pic.width === 48) { // Check if the image width is 48 pixels
      pic.src = newProfilePicURL;
      pic.srcset = newProfilePicURL; // To handle different resolutions
      pic.style.width = '48px'; // Ensure the width is 48px
      pic.style.height = '48px'; // Ensure the height is 48px
    }
    else if (pic.width === 32) { // Check if the image width is 48 pixels
        pic.src = newProfilePicURL;
        pic.srcset = newProfilePicURL; // To handle different resolutions
        pic.style.width = '32px'; // Ensure the width is 48px
        pic.style.height = '32px'; // Ensure the height is 48px
    }
    else if (pic.width === 40) { // Check if the image width is 48 pixels
        pic.src = newProfilePicURL;
        pic.srcset = newProfilePicURL; // To handle different resolutions
        pic.style.width = '40px'; // Ensure the width is 48px
        pic.style.height = '40px'; // Ensure the height is 48px
    }
    else if (pic.width === 24) { // Check if the image width is 48 pixels
        pic.src = newProfilePicURL;
        pic.srcset = newProfilePicURL; // To handle different resolutions
        pic.style.width = '24px'; // Ensure the width is 48px
        pic.style.height = '24px'; // Ensure the height is 48px
    }

  });
}

// Observe changes to the DOM to ensure new posts also have the profile pictures replaced
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    replaceProfilePictures();
  });
});

// Start observing the LinkedIn feed for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial run to replace profile pictures already on the page
replaceProfilePictures();
