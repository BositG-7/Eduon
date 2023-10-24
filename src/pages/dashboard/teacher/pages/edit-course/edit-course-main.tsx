/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { SegmentedControl } from "@mantine/core";

import CourseEdit from "./components/course-edit";
// eslint-disable-next-line import/order
import VideoUpload from "./components/video-upload";

import "react-quill/dist/quill.snow.css";

const CourseEditMain: React.FC = () => {
   const [segmentValue, setSegmentValue] = useState("course");
   const [courseDetailUpload, setCourseDetailUpload] = useState< number>(0);
   const handleSegmentChange = (value: string) => {
      setSegmentValue(value);
   };

   return (
      <>
         <SegmentedControl
         w={400}
         color="blue"
         size='md'
            data={[
               { label: "Edit Course", value: "course" },
               { label: "Edit Video", value: "video" }
            ]}
            value={segmentValue}
            onChange={handleSegmentChange}
            style={{ background: "white" }}
         />

         {segmentValue === "course" && <CourseEdit />}
         {segmentValue === "video" && <VideoUpload courseDetailUpload={courseDetailUpload} />}
      </>
   );
};

export default CourseEditMain;
