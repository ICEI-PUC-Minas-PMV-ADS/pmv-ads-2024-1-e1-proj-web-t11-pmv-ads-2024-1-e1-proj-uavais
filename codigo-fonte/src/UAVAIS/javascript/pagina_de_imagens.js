  const uploadInput = document.getElementById('upload');
  const imageContainer = document.getElementById('image-container');

    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
                    
          reader.onload = (e) => {
              const imageDataUrl = e.target.result;
                        
              localStorage.setItem('uploadedImage', imageDataUrl);
              
              displayImage(imageDataUrl);
          };
                   
          reader.readAsDataURL(file);
      }
  });
  
  function displayImage(imageDataUrl) {
      imageContainer.innerHTML = `<img src="${imageDataUrl}" alt="Uploaded Image" style="max-width: 100%;">`;
  }

  window.addEventListener('load', () => {
      const savedImageDataUrl = localStorage.getItem('uploadedImage');
      if (savedImageDataUrl) {
          displayImage(savedImageDataUrl);
      }
  });