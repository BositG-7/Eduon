import { useState } from 'react';
import { Flex, Group, Modal, Radio, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IoIosAddCircleOutline } from 'react-icons/io';

import style from '../styles/my-account.module.scss'

function Demo() {
    const [opened, { open, close }] = useDisclosure(false);
    const [inputValue, setInputValue] = useState(0);
    const [selectedRadio, setSelectedRadio] = useState('');

    const handleSubmit = () => {
        close()
    }

    const handleRadioChange = (value:any)=>{
        console.log(value);
        
        setSelectedRadio(value)
    }
    const btnStyle1 = {
        color: "#006AFF",
        fontFamily: "Gilroy-Medium",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        borderRadius: "18px",
        border: "3px solid rgba(17, 17, 17, 0.04)",
        padding: '14px 25px',
        marginTop: "24px"
    }
    const btnStyle2 = {
        color: "#006AFF",
        fontFamily: "Gilroy-Medium",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        borderRadius: "18px",
        border: "3px solid rgba(17, 17, 17, 0.04)",
        padding: '14px 45px',
        marginTop: "24px"
    }
    const radio = {
        padding: '24px 55px',
        background: "rgba(17, 17, 17, 0.03)",
        borderRadius: '18px',
        color: "rgba(17, 17, 17, 0.54)",
        fontFamily: "Gilroy",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }

    return (
        <>
            <Modal opened={opened} onClose={close} centered withCloseButton={false}>
                <TextInput
                    label='Summa'
                    placeholder='Summani kiriting'
                    type='number'
                    value={inputValue}
                    onChange={(e) => setInputValue(parseInt(e.target.value,10))} />
                <Radio.Group label="To'lov turi">
                    <Flex justify="space-around">
                        <Radio
                            label='Click'
                            value="Click"
                            labelPosition='left'
                            style={radio}
                            onClick={() => handleRadioChange("Click")}
                        />
                        <Radio
                            label='Payme'
                            value="Payme"
                            labelPosition='left'
                            style={radio}
                            onClick={() => handleRadioChange("Payme")}
                        />

                    </Flex>
                </Radio.Group>
                <Flex justify="space-around">
                    <button style={btnStyle1} onClick={close}>Bekor qilish</button>
                    <button style={btnStyle2} onClick={handleSubmit}>To'ldirish</button>
                </Flex>
            </Modal>

            <Group position="center" className={style.fillup}>
                <IoIosAddCircleOutline onClick={open} className={style.icon} />
                <p >Hisobni to'ldirish</p>
            </Group>
        </>
    );
}
export default Demo