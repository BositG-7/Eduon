/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { Button, Container, FileInput, Flex, Paper, Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { CreateCourse } from "modules/kurslar/api";
import { useCategory } from "modules/kurslar/hooks/use-category";
// eslint-disable-next-line import/order
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const CourseCreate: React.FC = () => {
    const [courseData, setCourseData] = useState({
        name: "",
        description: "",
        price: "",
        key_word: "",
        whos_course: "",
        view: 0,
        discount: 0,
        category: 0,
        language: "",
        speaker: 1,
        type: "",
        degree: "",
        image: [],
    });
    const { category } = useCategory();
    const [categoryOptions, setCategory]: any = useState([])

    useEffect(() => {
        // @ts-expect-error

        if (Array.isArray(category.results)) {
            // @ts-expect-error
            const categoryOptions1 = category.results.map((item: any) => ({
                label: item.name, value:
                    item.id
            }));

            setCategory(categoryOptions1)
        } else {
            notifications.show({ message: "Category is not an array", color: "red" });

        }
    }, [category])

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
            notifications.show({ message: "Value is null", color: "red" });

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
            notifications.show({ message: "No file selected", color: "red" });

        }
    };
    const handleDescriptionChange = (value: string) => {
        setCourseData({
            ...courseData,
            description: value,
        });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // eslint-disable-next-line prefer-destructuring
        courseData.image = courseData.image[0]

        try {
            const response = await CreateCourse(courseData);

            notifications.show({ message: "Course created successfully", color: "green" });

        } catch (error: any) {

            notifications.show({ message: error.message, color: "red" });
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
                    <div className="description-editor">
                        <label>Description</label>
                        <ReactQuill
                            value={courseData.description}
                            onChange={handleDescriptionChange}
                            placeholder="Write course description"
                            style={{borderRadius:"10px"}}
                        />
                    </div>
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
                            name="whos_course"
                            value={courseData.whos_course}
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
                        name="key_word"
                        value={courseData.key_word}
                        placeholder="Write keywords ex: #python"
                        onChange={handleInputChange}
                        pb="md"
                        required
                    />
                    <Flex justify="space-between" pb="md">
                        <Select
                            label="Category"
                            name="category"
                            data={categoryOptions}
                            w="60%"
                            placeholder="Write course category"
                            onChange={value => handleSelectChange('category', value)}
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
                            data={["ru", "en", "uz"]}
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
