import { FunctionComponent } from "react";
import { BsArrowDownUp, BsExclamationSquare } from 'react-icons/bs'

import style from "../styles/moliya.module.scss"

interface MoliyaProps {

}

const Moliya: FunctionComponent<MoliyaProps> = () => (
    <div className={style.container}>
        <div className={style.cards}>

            <div className={style['card-details']}>
                <p className={style['card-name']}>Uzcard</p>
                <p className={style['card-number']}>**** **** **** 1237</p>

                <div className={style['card-footer']}>

                    <div className={style['card-holder']}>
                        <p className={style['card-holder-p-first']}>Karta egasi</p>
                        <p className={style['card-holder-p-second']}>Ibrohim Ismagilov</p>
                    </div>

                    <div className={style['card-expiry-date']}>
                        <p className={style['card-expiry-p-first']}>Muddati</p>
                        <p className={style['card-expiry-p-second']}>22/12</p>
                    </div>

                </div>

            </div>
            <div className={style['cards-right']}>

                <div className={style['kirim-chiqim']}>

                    <div className={`${style.balans} ${style.first}`}>
                        <p className={style.name}>Balans</p>
                        <p className={style.number}>11,000,000 <span className={style.sum}>so'm</span></p>
                    </div>

                    <div className={style.balans}>
                        <p className={style.name}>Hozirgacha umumiy kirim</p>
                        <p className={style.number}>198,000,000 <span className={style.sum}>so'm</span></p>
                    </div>

                </div>


                <div className={style.notes}>

                    <div className={style['notes-first']}>
                        <BsExclamationSquare className={style.icon} />
                        <p>Pul har oyning 10 sanasigacha kartangizga yuboriladi.</p>
                    </div>

                    <div className={style['notes-second']}>
                        <BsExclamationSquare className={style.icon} />
                        <p>Pul yuborilishi uchun hisobingizda kamida 50.000 so'm bo'lishi lozim.</p>
                    </div>

                </div>

            </div>

        </div>

        <div className={style['moliya-down']}>
            <span>Kirim chiqimlar</span>

            <div className={style['moliya-body']}>
                <div className={style.incomes}>
                    <BsArrowDownUp className={style.icon} />
                    <p className={style.texts}>Ulug'bek N.</p>
                    <p className={style.texts}>08.06.2021 - 21:23</p>
                    <p className={style.texts}>2,000,000 so'm</p>
                    <p className={style.texts}>Kurs sotildi</p>
                </div>

                <div className={style.expenses}>
                    <BsArrowDownUp className={style.icon} />
                    <p className={style.texts}>Ulug'bek N.</p>
                    <p className={style.texts}>08.06.2021 - 21:23</p>
                    <p className={style.texts}>2,000,000 so'm</p>
                    <p className={style.texts}>Reklama uchun</p>
                </div>
            </div>
        </div>
    </div>
)

export default Moliya;