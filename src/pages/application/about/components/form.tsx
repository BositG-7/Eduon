import { FunctionComponent } from "react";
import * as yup from "yup";
import { Button, createStyles, Flex, Input, Textarea, Title } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IMaskInput } from "react-imask";

interface FormProps {}

const useStyles = createStyles(theme => ({
   title: {
      color: "#FAFAFA",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      marginBottom: "11px",
      marginLeft: "24px"
   }
}));

const inputStyles = {
   input: {
      width: "100%",
      backgroundColor: "rgba(250, 250, 250, 0.24)",
      color: "rgba(250, 250, 250, 0.72)",
      border: "none",
      height: "80px",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      paddingLeft: "24px"
   }
};
const textAreaStyles = {
   input: {
      width: "100%",
      backgroundColor: "rgba(250, 250, 250, 0.24)",
      color: "rgba(250, 250, 250, 0.72)",
      border: "none",
      height: "390px",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      paddingLeft: "24px"
   }
};

const schema = yup.object({
   name: yup.string().min(1).label("Name").required(),
   email: yup.string().email().label("Email").required(),
   phone: yup.string().min(5).label("Phone").required(),
   message: yup.string().min(1).label("Message").required()
});

const Form: FunctionComponent<FormProps> = () => {
   const { getInputProps, onSubmit } = useForm({
      initialValues: { name: "", email: "", phone: "", message: "" },
      validate: yupResolver(schema)
   });
   const { cx, classes } = useStyles();

   const handleSubmit = (values: any) => {
      console.log(values);
   };

   return (
      <form onSubmit={onSubmit(handleSubmit)}>
         <Flex
            direction="column"
            p={54}
            h="670px"
            mb={94}
            mt={42}
            justify="center"
            align="center"
            gap="54px"
            w="1040px"
            bg="#006AFF"
            sx={{ borderRadius: "36px" }}
         >
            <Flex justify="center" gap="32px" align="start" w="100%">
               <Flex gap="30px" w="100%" direction="column" h="100%" justify="center" align="center">
                  {/* Ismingiz inputi */}
                  {/* <Title className={classes.title}>Ismingiz</Title> */}
                  <Input.Wrapper w="100%" label={<Title className={classes.title}>Ismingiz</Title>}>
                     <Input
                        h={82}
                        radius={24}
                        sx={{ color: "red" }}
                        styles={inputStyles}
                        placeholder="Misol: Husan Mamasaidov"
                        {...getInputProps("name")}
                     />
                  </Input.Wrapper>
                  {/* Elektron pochta inputi */}
                  <Input.Wrapper w="100%" label={<Title className={classes.title}>Elektron pochtangiz</Title>}>
                     <Input
                        h={82}
                        radius={24}
                        sx={{ color: "red" }}
                        styles={inputStyles}
                        placeholder="Misol: eduonplatform@gmail.com"
                        {...getInputProps("email")}
                     />
                  </Input.Wrapper>
                  {/* Telefon raqam inputi */}
                  <Input.Wrapper w="100%" label={<Title className={classes.title}>Telefon raqamingiz</Title>}>
                     <Input<any>
                        component={IMaskInput}
                        mask="+000 (00) 000-00-00"
                        w="100%"
                        h={82}
                        radius={24}
                        sx={{ color: "red" }}
                        styles={inputStyles}
                        placeholder="+998 (xx) xxx-xx-xx"
                        {...getInputProps("phone")}
                     />
                  </Input.Wrapper>
               </Flex>
               {/* Xabar inputi */}
               <Flex align="center" direction="column" w="100%">
                  <Input.Wrapper w="100%" label={<Title className={classes.title}>Xabaringiz</Title>}>
                     <Textarea
                        styles={textAreaStyles}
                        radius="24px"
                        w="100%"
                        placeholder="Shu yerga yozing..."
                        style={{ height: "386px !important", width: "450px" }}
                        {...getInputProps("message")}
                     />
                  </Input.Wrapper>
               </Flex>
            </Flex>
            <Button sx={{ fontSize: "18px" }} w={216} h={82} radius={24} variant="white" type='submit'>
               Yuborish
            </Button>
         </Flex>
      </form>
   );
};

export default Form;
