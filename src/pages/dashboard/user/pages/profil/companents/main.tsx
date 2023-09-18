import { FunctionComponent, useState } from "react";
import * as yup from "yup";
import { Box, Button, Flex, InputBase, Paper, Radio } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Types } from "modules/auth";
import { useAuth } from "modules/auth/context";

interface MainProps {}

const schema = yup.object({
  firstName: yup.string().min(3).label("FirstName").required(),
  lastName: yup.string().min(3).label("LastName").required(),
  birthday: yup.number().min(10).label("Birthday"),
  gender: yup.string().min(5).label("Gender"),
  phone: yup.string().min(17).label("Phone"),
  email: yup.string().label("Email").required(),
  job: yup.string().label("Job"),
});

const Main: FunctionComponent<MainProps> = () => {
  const { user } = useAuth();
  
  console.log(user);
  
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    phone: user?.phone,
    image: "",
    balance: "",
    email: "",
    username: "",
    birthday: "",
    about: "",
    is_active: true,
    is_spiker: true,
    gender: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault(); // Formani normallikda yuborishni oldini olish uchun
    console.log(formValues);
  };

  const { getInputProps } = useForm<Types.IForm.UserProfil>({
    initialValues: formValues,
    validate: yupResolver(schema),
  });

  const radio = {
    border: "1px solid blue",
    padding: "9px",
    borderRadius: "5px",
    width: "210px",
  };

  return (
    <div>
      <Box h="100vh" w="90%" sx={{ display: "flex", justifyContent: "space-around", alignItems: "start" }}>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSumbit}>
          <Paper bg="var(--paper-bg)" w="700px">
            <Flex gap={20} align="center" p={20}>
              <Flex gap={22} w="100%">
                <InputBase
                  placeholder="Ismingiz..."
                  radius="sm"
                  value={formValues.first_name}
                  onChange={(e) => handleInputChange("first_name", e.target.value)}
                />

                <InputBase
                  placeholder="Tel:"
                  radius="sm"
                  sx={{
                    border: "none",
                  }}
                  value={formValues.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </Flex>
            </Flex>
          </Paper>
          <Paper bg="var(--paper-bg)" w="700px">
            <Flex gap={20} align="center" p={20}>
              <Flex gap={22} w="100%">
                <InputBase
                  autoFocus
                  placeholder="Familyangiz.."
                  radius="sm"
                  value={formValues.last_name}
                  onChange={(e) => handleInputChange("last_name", e.target.value)}
                />

                <InputBase
                  type="email"
                  placeholder="email"
                  radius="sm"
                  sx={{
                    border: "none",
                  }}
                  value={formValues.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </Flex>
            </Flex>
          </Paper>
          <Paper bg="var(--paper-bg)" w="700px">
            <Flex gap={20} align="center" p={20}>
              <Flex gap={22} w="100%">
                <InputBase
                  autoFocus
                  type="number"
                  label="Tug'ilgan sana"
                  placeholder="Sana"
                  radius="sm"
                  value={formValues.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                />

                <InputBase
                  label="Kasbingiz"
                  placeholder="email"
                  type="email"
                  radius="sm"
                  sx={{
                    border: "none",
                  }}
                  value={formValues.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </Flex>
            </Flex>
          </Paper>
          <Paper bg="var(--paper-bg)" w="750px" sx={{ marginLeft: "20px" }}>
            <Radio.Group label="Jinsi">
              <Flex sx={{ gap: "20px" }}>
                <Radio
                  label="O'g'il"
                  value="O'g'il"
                  labelPosition="left"
                  style={radio}
                  checked={formValues.gender === "O'g'il"}
                  onChange={() => handleInputChange("gender", "O'g'il")}
                />
                <Radio
                  label="Qiz"
                  value="Qiz"
                  labelPosition="left"
                  style={radio}
                  checked={formValues.gender === "Qiz"}
                  onChange={() => handleInputChange("gender", "Qiz")}
                />
              </Flex>
            </Radio.Group>
          </Paper>
          <Flex>
            <Button
              type="submit"
              sx={{
                color: "rgba(0, 106, 255, 1)",
                height: "50px",
                backgroundColor: "rgba(231, 240, 255, 1)",
                fontSize: "20px",
                marginTop: "40px",
                marginLeft: "190px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Saqlash
            </Button>
          </Flex>
        </form>
      </Box>
    </div>
  );
};

export default Main;
