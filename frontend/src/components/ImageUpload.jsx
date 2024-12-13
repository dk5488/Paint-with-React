import React from "react";

const ImageUpload = ({ setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);

      const reader = new FileReader();

      // Set up the onload event handler
      reader.onload = () => {
        if (reader.result) {
          const base64String = reader.result; // Assuming this is the base64 string
          const cleanedBase64String = base64String.replace(
            /^data:image\/(png|jpeg);base64,/,
            ""
          );
          console.log("Image data (base64):", base64String);
          console.log("cleaned data::",cleanedBase64String)

          // Now you can use the cleaned base64 string to set the image
          setImage(cleanedBase64String);
        
        } else {
          console.error("Reader result is null even after loading.");
        }
      };

      // Error handler for debugging
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      // Start reading the file as a data URL
      reader.readAsDataURL(file);
    } else {
      console.warn("No file selected.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
