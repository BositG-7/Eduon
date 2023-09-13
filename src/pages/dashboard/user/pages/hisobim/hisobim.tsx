import { FunctionComponent } from "react";
import { BsArrowDownUp } from "react-icons/bs";

import Demo from "./components/modal";

import style from './styles/hisobim.module.scss'


interface HisobimProps { }

const Hisobim: FunctionComponent<HisobimProps> = () => {
    const s = ''

    return (
        <div className={style.container}>
            <div className={style.cards}>

                <div className={style['card-information']}>
                    <div className={`${style.balans} ${style.first}`}>
                        <p className={style.name}>Umumiy hisobim</p>
                        <p className={style.number}>11,000,000 <span className={style.sum}>so'm</span></p>
                    </div>

                    <div className={style.balans}>
                        <p className={style.name}>Balans</p>
                        <p className={style.number}>198,000,000 <span className={style.sum}>so'm</span></p>
                    </div>
                    <div className={style.balans}>
                        <p className={style.name}>Vaucher</p>
                        <p className={style.number}>198,000,000 <span className={style.sum}>so'm</span></p>
                    </div>
                        <Demo/>

                </div>
            </div>

            <div className={style['hisobim-down']}>
                <span>Kirim chiqimlar</span>

                <div className={style['hisobim-body']}>
                    <div className={style.incomes}>
                        <BsArrowDownUp className={style.icon} />
                        <p className={style.name}>Ulug'bek N.</p>
                        <p className={style.date}>08.06.2021 - 21:23</p>
                        <p className={style.cost}>2,000,000 so'm</p>
                        <p className={style.sabab}>Kurs sotildi</p>
                    </div>

                    <div className={style.expenses}>
                        <BsArrowDownUp className={style.icon} />
                        <p className={style.name}>Ulug'bek N.</p>
                        <p className={style.date}>08.06.2021 - 21:23</p>
                        <p className={style.cost}>2,000,000 so'm</p>
                        <p className={style.sabab}>Kurs sotildi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hisobim;