import React, { useState } from 'react';
import { Button, Container, FileInput, Paper, Select, Textarea, TextInput } from '@mantine/core';

const CourseCreate: React.FC = () => {
    const [courseData, setCourseData] = useState({
        name: '',
        description: '',
        keyword: '',
        course: '',
        mentor: '',
        view: '',
        discount: '',
        category: '',
        language: '',
        type: 'paid',
        degree: 'primary',
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setCourseData({
            ...courseData,
            [name]: value,
        });
    };

    const handleSelectChange = (name: string, value: string | null) => {
        if (value !== null) {
            setCourseData({
                ...courseData,
                [name]: value,
            });
        } else {
            console.error('Value is null');
        }
    }
    const handleImageUpload = (files:any) => {
        const file = files[0];

        setSelectedImage(file);

    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(courseData);
    };

    return (
        <Container size="sm">
            <Paper p="lg">
                <h1>Create a New Course</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        label="Course Name"
                        name="name"
                        value={courseData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Textarea
                        label="Description"
                        name="description"
                        value={courseData.description}
                        onChange={handleInputChange}
                        w='70%'
                        required
                    />
                    <FileInput
                        name="image"
                        label="Select an Image"
                        onChange={handleImageUpload}
                        required
                    />
                    <TextInput
                        label="Keyword"
                        name="keyword"
                        value={courseData.keyword}
                        onChange={handleInputChange}
                        required
                    />
                    <TextInput
                        label="Course"
                        name="course"
                        value={courseData.course}
                        onChange={handleInputChange}
                        required
                    />
                    <TextInput
                        label="Mentor"
                        name="mentor"
                        value={courseData.mentor}
                        onChange={handleInputChange}
                        required
                    />
                    <TextInput
                        label="Category"
                        name="category"
                        value={courseData.category}
                        onChange={handleInputChange} />
                    <Select
                        label="Discount"
                        name="discount"
                        data={["paid", 'free']}
                        value={courseData.discount}
                        onChange={(value) => handleSelectChange('discount', value)}
                    />

                    <Select
                        label="Language"
                        name="language"
                        data={['russian', 'english', 'uzbek']}
                        value={courseData.language}
                        onChange={(value) => handleSelectChange('language', value)}
                    />
                    <Select
                        label="Type"
                        name="type"
                        data={['paid', 'free']}
                        value={courseData.type}
                        onChange={(value) => handleSelectChange('type', value)}
                    />
                    <Select
                        label="Degree"
                        name="degree"
                        data={['primary', 'medium', 'high']}
                        value={courseData.degree}
                        onChange={(value) => handleSelectChange('degree', value)}
                    />
                    <Button type="submit">Create Course</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default CourseCreate;
