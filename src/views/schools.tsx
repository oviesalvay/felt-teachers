import Search from "../components/search";
import { FC, useState } from "react";
import '../styles/school.scss';
import {Button}  from "../components/button/button";


export const School: FC = () => {
    const [tab, setTab] = useState<number>(1);
    return(
        <>
        <section className="courses">
        <div className="subjects">
                    <hgroup>
                        <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>Science</button>
                        <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Arts</button>
                        <button onClick={() => setTab(3)} className={tab === 3 ? 'current' : ''}>Commercial</button>
                        <button onClick={() => setTab(4)} className={tab === 4 ? 'current' : ''}>Nursery and Primary</button> 
                    </hgroup>
                </div>
            {tab === 1 &&
            <div>
        <Search/>
        <h3>Search for Qualified Teachers by Subject Category</h3>
                <div className="subject-intro">
                    <div>  
  <Button type ="none" content="Mathematics"/>
<Button type="none" content="PHYSICS"/>
<Button type="none" content="FURTHER MATHEMATICS"/>
<Button type="none" content="GEOGRAPHY"/>
<Button type="none" content="CIVIC EDUCATION"/>
</div>
<div>
<Button type="none" content="ENGLISH LANGUAGE"/>
<Button type="none" content="CHEMISTRY"/>
<Button type="none" content="BIOLOGY"/>
<Button type="none" content="AGRICULTURAL SCIENCE"/>
<Button type="none" content="AGRICULTURAL SCIENCE"/>
</div>
                    </div>
                </div>
    }    
        {tab === 2 &&
         <div>
         <Search/>
         <h3>Search for Qualified Teachers by Subject Category</h3>
                 <div className="subject-intro">
                     <div>
 <Button type="none" content="MATHEMATICS"/>
 <Button type="none" content="GOVERNMENT"/>
 <Button type="none" content="LITERATURE IN ENGLISH"/>
 <Button type="none" content="COMMERCE"/>
 <Button type="none" content="MUSIC"/>
 <Button type="none" content="HISTORY"/>
 </div>
 <div>
 <Button type="none" content="ENGLISH LANGUAGE"/>
 <Button type="none" content="ECONOMICS"/>
 <Button type="none" content="CIVIC EDUCATION"/>
 <Button type="none" content="C- R- S"/>
 <Button type="none" content="FOOD AND NUTRITION"/>
 <Button type="none" content="FINE AND APPLIED ARTS"/>
 </div>
 </div>
 </div>
}
 {tab === 3 &&
    <div>
    <Search/>
    <h3>Search for Qualified Teachers by Subject Category</h3>
            <div className="subject-intro">
                <div>
<Button type="none" content="MATHEMATICS"/>
<Button type="none" content="GOVERNMENT"/>
<Button type="none" content="FINANCIAL ACCOUNTING"/>
<Button type="none" content="COMMERCE"/>
<Button type="none" content="FOOD AND NUTRITION"/>
</div>
<div>
<Button type="none" content="ENGLISH LANGUAGE"/>
<Button type="none" content="ECONOMICS"/>
<Button type="none" content="CIVIC EDUCATION"/>
<Button type="none" content="C- R- S"/>
</div>
</div>
</div>
 }
      </section>
        </>
    )
}
export default School;