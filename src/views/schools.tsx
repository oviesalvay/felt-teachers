import Search from "../components/search";
import { FC, useState } from "react";
import '../styles/school.scss';
import { Buttoned } from "../components/button/button";


export const School: FC = () => {
    const [tab, setTab] = useState<number>(1);
    return (
        <>
            <section className="courses">
                <div className="subjects">
                    <hgroup>
                        <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>Science</button><span className="science"></span>
                        <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Arts</button><span className="science"></span>
                        <button onClick={() => setTab(3)} className={tab === 3 ? 'current' : ''}>Commercial</button><span className="science"></span>
                        <button onClick={() => setTab(4)} className={tab === 4 ? 'current' : ''}>Nursery and Primary</button>
                    </hgroup>
                </div>
                {tab === 1 &&
                    <div>
                        <Search />
                        <h3>Search for Qualified Teachers by Subject Category</h3>
                        <div className="subject-intro">
                            <div>
                                <Buttoned type="none" content="MATHEMATICS" />
                                <Buttoned type="none" content="PHYSICS" />
                                <Buttoned type="none" content="FURTHER MATHEMATICS" />
                                <Buttoned type="none" content="GEOGRAPHY" />
                                <Buttoned type="none" content="CIVIC EDUCATION" />
                            </div>
                            <div>
                                <Buttoned type="none" content="ENGLISH LANGUAGE" />
                                <Buttoned type="none" content="CHEMISTRY" />
                                <Buttoned type="none" content="BIOLOGY" />
                                <Buttoned type="none" content="AGRICULTURAL SCIENCE" />
                                <Buttoned type="none" content="AGRICULTURAL SCIENCE" />
                            </div>
                        </div>
                    </div>
                }
                {tab === 2 &&
                    <div>
                        <Search />
                        <h3>Search for Qualified Teachers by Subject Category</h3>
                        <div className="subject-intro">
                            <div>
                                <Buttoned type="none" content="MATHEMATICS" />
                                <Buttoned type="none" content="GOVERNMENT" />
                                <Buttoned type="none" content="LITERATURE IN ENGLISH" />
                                <Buttoned type="none" content="COMMERCE" />
                                <Buttoned type="none" content="MUSIC" />
                                <Buttoned type="none" content="HISTORY" />
                            </div>
                            <div>
                                <Buttoned type="none" content="ENGLISH LANGUAGE" />
                                <Buttoned type="none" content="ECONOMICS" />
                                <Buttoned type="none" content="CIVIC EDUCATION" />
                                <Buttoned type="none" content="C- R- S" />
                                <Buttoned type="none" content="FOOD AND NUTRITION" />
                                <Buttoned type="none" content="FINE AND APPLIED ARTS" />
                            </div>
                        </div>
                    </div>
                }
                {tab === 3 &&
                    <div>
                        <Search />
                        <h3>Search for Qualified Teachers by Subject Category</h3>
                        <div className="subject-intro">
                            <div>
                                <Buttoned type="none" content="MATHEMATICS" />
                                <Buttoned type="none" content="GOVERNMENT" />
                                <Buttoned type="none" content="FINANCIAL ACCOUNTING" />
                                <Buttoned type="none" content="COMMERCE" />
                                <Buttoned type="none" content="FOOD AND NUTRITION" />
                            </div>
                            <div>
                                <Buttoned type="none" content="ENGLISH LANGUAGE" />
                                <Buttoned type="none" content="ECONOMICS" />
                                <Buttoned type="none" content="CIVIC EDUCATION" />
                                <Buttoned type="none" content="C- R- S" />
                            </div>
                        </div>
                    </div>
                }
                {/* </div> */}
            </section>
        </>
    )
}
export default School;