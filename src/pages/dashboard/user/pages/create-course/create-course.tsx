import React, { useState } from "react";
import { Button, Container, FileInput, Flex, Paper, Select, Textarea, TextInput } from "@mantine/core";
import { CreateCourse } from "modules/kurslar/api";
import { useGenre } from "modules/kurslar/hooks/use-genre";

const CourseCreate: React.FC = () => {
   const [courseData, setCourseData] = useState({
      name: "",
      description: "",
      price: "",
      keyword: "",
      whosCourse: "",
      view: 0,
      discount: 0,
      category: 0,
      language: "",
      speaker: 0,
      type: "",
      degree: "",
      image: []
   });
   const { genre } = useGenre();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setCourseData({
         ...courseData,
         [name]: value
      });
   };

   const handleSelectChange = (name: string, value: string | null) => {
      if (value !== null) {
         setCourseData({
            ...courseData,
            [name]: value
         });
      } else {
         console.error("Value is null");
      }
   };
   const handleImageUpload = (files: any) => {
      if (files) {
         setCourseData({
            ...courseData,
            // @ts-ignore
            image: [files]
         });
      } else {
         console.error("No file selected");
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      console.log(courseData);

      const formData = new FormData();

      formData.append("name", courseData.name);
      formData.append("description", courseData.description);
      formData.append("price", courseData.price);
      formData.append("whosCourse", courseData.whosCourse);
      formData.append("keyword", courseData.keyword);
      if (courseData.image.length > 0) {
         for (let i = 0; i < courseData.image.length; i++) {
            formData.append("image", courseData.image[i]);
         }
      }
      // @ts-ignore
      formData.append("category", +courseData.category);
      // @ts-ignore

      formData.append("discount", +courseData.discount);
      formData.append("language", courseData.language);
      formData.append("type", courseData.type);
      formData.append("degree", courseData.degree);

      console.log(formData.get("image"));

      try {
         // @ts-ignore

         const response = await CreateCourse(formData);

         console.log("Response from server:", response.data);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <Container w="100%">
         <Paper p="lg" w="80%">
            <h1>Create a New Course</h1>
            <form onSubmit={handleSubmit}>
               <TextInput
                  label="Course Name"
                  name="name"
                  value={courseData.name}
                  onChange={handleInputChange}
                  placeholder="Write course name"
                  pb="md"
                  pt="xl"
                  required
               />
               <Textarea
                  label="Description"
                  name="description"
                  value={courseData.description}
                  placeholder="Write course description"
                  onChange={handleInputChange}
                  w="100%"
                  pb="md"
                  required
               />
               <TextInput
                  label="Price"
                  name="price"
                  type="number"
                  value={courseData.price}
                  onChange={handleInputChange}
                  placeholder="Enter a price"
                  pb="md"
               />
               <Flex justify="space-between" pb="md">
                  <TextInput
                     label="Whos Course"
                     name="whosCourse"
                     value={courseData.whosCourse}
                     w="60%"
                     placeholder="Write course mentor"
                     onChange={handleInputChange}
                     required
                  />
                  <FileInput
                     name="image"
                     label="Select an Image"
                     placeholder="Upload an image"
                     onChange={handleImageUpload}
                     accept="image/*"
                     required
                     w="30%"
                  />
               </Flex>
               <TextInput
                  label="Keyword"
                  name="keyword"
                  value={courseData.keyword}
                  placeholder="Write keywords ex: #python"
                  onChange={handleInputChange}
                  pb="md"
                  required
               />
               <Flex justify="space-between" pb="md">
                  <TextInput
                     label="Category"
                     name="category"
                     type="number"
                     value={courseData.category}
                     w="60%"
                     placeholder="Write course category"
                     onChange={handleInputChange}
                  />
                  <TextInput
                     label="Discount"
                     name="discount"
                     value={courseData.discount}
                     type="number"
                     w="30%"
                     placeholder="Enter a discount"
                     onChange={handleInputChange}
                  />
               </Flex>
               <Flex justify="space-between" pb="md">
                  <Select
                     label="Language"
                     name="language"
                     data={["russian", "english", "uzbek"]}
                     value={courseData.language}
                     placeholder="Select a language"
                     onChange={value => handleSelectChange("language", value)}
                  />
                  <Select
                     label="Type"
                     name="type"
                     data={["paid", "free"]}
                     value={courseData.type}
                     placeholder="Select a type"
                     onChange={value => handleSelectChange("type", value)}
                  />
                  <Select
                     label="Degree"
                     name="degree"
                     data={["primary", "medium", "high"]}
                     value={courseData.degree}
                     placeholder="Select a degree"
                     onChange={value => handleSelectChange("degree", value)}
                  />
               </Flex>
               <Button type="submit">Create Course</Button>
            </form>
         </Paper>
      </Container>
   );
};

export default CourseCreate;
