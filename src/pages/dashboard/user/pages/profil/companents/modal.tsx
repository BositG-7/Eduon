// import React, { FunctionComponent, useState } from "react";
// import { Button, Image,Modal } from "@mantine/core";
// import { UpdateImage } from "modules/auth/api"; // Import your API functions for updating and deleting images

// interface ImageModalProps {
//   image: File | null;
//   onClose: () => void;
// }

// const ImageModal: FunctionComponent<ImageModalProps> = ({ image, onClose }) => {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // Get the selected file

//     if (file) {
//       setSelectedImage(file);
//     }
//   };

//   const handleClose = () => {
//     setSelectedImage(null);
//     onClose();
//   };

//   const handleDeleteImage = async () => {
//     try {
//       if (image) {
//         // Use the DeleteImage function to delete the image from the backend
//         onClose();
//         // Handle success (e.g., show a success message)
//         console.log("Image deleted successfully");
//       }
//     } catch (error) {
//       // Handle error (e.g., show an error message)
//       console.error("Error deleting image:", error);
//     }
//   };

//   const handleSubmitImage = async () => {
//     try {
//       if (selectedImage) {
//         // Use the UpdateImage function to send the new image to the backend
//         await UpdateImage(selectedImage); // Replace with the actual function and endpoint
//         onClose();
//         // Handle success (e.g., show a success message)
//         console.log("Image updated successfully");
//       }
//     } catch (error) {
//       // Handle error (e.g., show an error message)
//       console.error("Error updating image:", error);
//     }
//   };

//   return (
//     <Modal
//       title="Profile Image"
//       size="xs"
//       onClose={handleClose}
//       footer={
//         <>
//           {image && (
//             <Button onClick={handleDeleteImage} color="red">
//               Delete
//             </Button>
//           )}
//           <Button onClick={handleSubmitImage} color="blue">
//             Submit
//           </Button>
//         </>
//       }
//     >
//       {/* Hidden file input element */}
//       <input
//         type="file"
//         accept="image/*"
//         style={{ display: "none" }}
//         onChange={handleImageChange}
//       />

//       {/* Display selected image */}
//       <Image
//         src={selectedImage ? URL.createObjectURL(selectedImage) : URL.createObjectURL(image)}
//         alt="User Image"
//         onClick={() => {
//           if (!image) {
//             // Trigger the click event of the hidden file input element when the image is clicked
//             const fileInput = document.getElementById("fileInput") as HTMLInputElement;
            
//             fileInput.click();
//           }
//         }}
//         // cursor="pointer"
//       />
//     </Modal>
//   );
// };

// export default ImageModal;


