import { Rating } from '@mantine/core';

import style from './styles/courses.module.scss'


export interface CoursesProps { }

const Courses = (props: CoursesProps) => {
    const s='';

    return (
        <div className={style['course-container']}>
            <div className={style['course-body']}>

                <div className={style.main}>

                    <div className={style.video}>Video</div>

                    <div className={style.description}>

                        <div className={style.title}>
                            <h3>Biznesda CRM sistemada foydalanish va o'rnatish</h3>
                        </div>
                        <Rating defaultValue={0}/>
                    </div>

                </div>
                <div className={style['kurs-tarkibi']}>Kurs tarkibi</div>
            </div>
        </div>

    )
    }

    export default Courses;