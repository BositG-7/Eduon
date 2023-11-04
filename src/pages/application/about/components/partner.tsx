import { FunctionComponent } from "react";
import { Box, Flex, Text, Title } from "@mantine/core";

interface PartnerProps {}

const Partner: FunctionComponent<PartnerProps> = () => (
   <>
      <Flex mt="30" justify="center" align="center" direction="column" h="auto" maw="700px">
         <Title
            sx={{
               fontSize: "20px",
               fontStyle: "normal",
               fontWeight: 700,
               lineHeight: "normal",
               color: "#006AFF"
            }}
            mt="50px"
         >
            HAMKORLARIMIZ
         </Title>
         <Text
            sx={{
               fontSize: "46px",
               fontStyle: "normal",
               fontWeight: 700,
               lineHeight: "normal"
            }}
         >
            InfoNexga{" "}
            <span
               style={{
                  fontSize: "46px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "#006AFF"
               }}
            >
               hissa
            </span>{" "}
            qo’shganlar
         </Text>
         <Flex gap="30px" mt="20px" justify="space-between" align="center">
            <Box sx={{ border: "1px solid rgba(17, 17, 17, 0.04)", borderRadius: "10px", padding: "0 8px" }} w="152px">
               <Title>7 ta</Title>
               <Text sx={{ color: "rgba(17, 17, 17, 0.54)", fontSize: "12px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>
                  IT va marketing kompaniyalari
               </Text>
            </Box>
            {/* <img src={Logos} alt="" /> */}

            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M6.172 0.599999C7.65333 0.599999 8.9 1.09867 9.912 2.096C10.924 3.09333 11.43 4.318 11.43 5.77C11.43 7.222 10.924 8.44667 9.912 9.444C8.9 10.4413 7.65333 10.94 6.172 10.94H3.466V16H0.43V0.599999H6.172ZM6.172 8.102C6.81733 8.102 7.35267 7.882 7.778 7.442C8.20333 6.98733 8.416 6.43 8.416 5.77C8.416 5.09533 8.20333 4.538 7.778 4.098C7.35267 3.658 6.81733 3.438 6.172 3.438H3.466V8.102H6.172ZM19.5226 0.599999C21.6346 0.599999 23.3946 1.34067 24.8026 2.822C26.2252 4.30333 26.9366 6.12933 26.9366 8.3C26.9366 10.4707 26.2252 12.2967 24.8026 13.778C23.3946 15.2593 21.6346 16 19.5226 16H13.4066V0.599999H19.5226ZM19.5226 13.096C20.8572 13.096 21.9426 12.656 22.7786 11.776C23.6146 10.8813 24.0326 9.72267 24.0326 8.3C24.0326 6.87733 23.6146 5.726 22.7786 4.846C21.9426 3.95133 20.8572 3.504 19.5226 3.504H16.4426V13.096H19.5226ZM34.8322 0.599999C36.3135 0.599999 37.5602 1.09867 38.5722 2.096C39.5842 3.09333 40.0902 4.318 40.0902 5.77C40.0902 7.222 39.5842 8.44667 38.5722 9.444C37.5602 10.4413 36.3135 10.94 34.8322 10.94H32.1262V16H29.0902V0.599999H34.8322ZM34.8322 8.102C35.4775 8.102 36.0128 7.882 36.4382 7.442C36.8635 6.98733 37.0762 6.43 37.0762 5.77C37.0762 5.09533 36.8635 4.538 36.4382 4.098C36.0128 3.658 35.4775 3.438 34.8322 3.438H32.1262V8.102H34.8322Z"
                  fill="#111111"
                  fillOpacity="0.54"
               />
            </svg>
            <Title
               children="PDP PRACTICUM"
               sx={{
                  color: "rgba(17, 17, 17, 0.36)",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal"
               }}
            />
            <svg width="88" height="18" viewBox="0 0 88 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M0.924 17H3.916V5.846L8.734 12.38L13.662 5.736V17H16.654V0.94H13.816L8.756 7.694L3.894 0.94H0.924V17Z"
                  fill="#111111"
                  fillOpacity="0.54"
               />
               <path
                  d="M18.4767 17H21.4687V10.356H27.5627V7.496H21.4687V3.8H27.5627V0.94H18.4767V17ZM35.028 17.264C36.722 17.264 38.262 16.538 39.208 15.328V17H42.178V4.13H39.208V5.67C38.262 4.548 36.766 3.866 35.072 3.866C31.816 3.866 28.692 6.308 28.692 10.576C28.692 14.8 31.926 17.264 35.028 17.264ZM35.512 14.536C33.312 14.536 31.618 12.776 31.618 10.532C31.618 8.31 33.312 6.572 35.512 6.572C37.734 6.572 39.362 8.332 39.362 10.532C39.362 12.754 37.734 14.536 35.512 14.536ZM43.8697 17H46.8397V13.722L48.8857 11.456L52.7357 17H56.0577L50.9097 9.696L55.8817 4.13H52.3177L46.8397 10.334V0.72H43.8697V17ZM56.062 6.792H58.262V11.632C58.262 15.724 59.472 17 63.454 17H63.872V14.206C61.584 14.206 61.254 13.854 61.254 11.61V6.792H63.872V4.13H61.254V0.126L58.262 2.172V4.13H56.062V6.792ZM71.1294 17.264C74.8254 17.264 77.7954 14.272 77.7954 10.576C77.7954 6.814 74.8254 3.866 71.1294 3.866C67.4114 3.866 64.4634 6.814 64.4634 10.576C64.4634 14.272 67.4114 17.264 71.1294 17.264ZM71.1294 14.47C68.9954 14.47 67.3894 12.71 67.3894 10.576C67.3894 8.398 68.9954 6.66 71.1294 6.66C73.2414 6.66 74.8694 8.398 74.8694 10.576C74.8694 12.71 73.2414 14.47 71.1294 14.47ZM79.1041 17H82.0741V10.136C82.0741 7.914 82.9761 6.99 84.7141 6.99C85.5721 6.99 86.0561 7.21 86.4961 7.496L87.6181 4.68C87.0241 4.35 86.2981 4.13 85.3521 4.13C83.7461 4.13 82.6461 4.768 82.0521 6.044V4.13H79.1041V17Z"
                  fill="#111111"
                  fillOpacity="0.36"
               />
            </svg>
         </Flex>
      </Flex>
   </>
);

export default Partner;
