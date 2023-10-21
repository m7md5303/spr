import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import m from './images/photo_2022-09-20_17-19-28.jpg'
import l from './images/email-logo.png'
import khedma from './images/m1.jpg'
import flight from './images/flight.jpg'
import sm from './images/sm.jpg'
import mk from './images/mekka.jpg'
import tr from './images/483742076.jpg'
import ty from './images/Taiba-Al-madina-Hotel.jpg'
import hty from './images/hayah_tyba.webp'
import ka from './images/keswa.jpg'
import './App.css';
import Mekka from './components/Mekka';
import Madina from './components/Madina';
import Khedma from './components/Khedma';
import Flight from './components/Flight';
function App() {
  return (
    <div className="App">
       {window.scrollTo(0,0)}
      <img src={m} className='imgintro'/>
      <div className='mintro'>    <Fade delay={200}>
      <img src={l} className='l'/>
  
      <div className='intro'> <TypeAnimation
        sequence={[
          ' الى كل من غلبهم الشوق و ملأتهم الأمنيات بزيارة بيت اللّه الحرام ومسجد رسول اللّه ﷺ، تعلن شركة الماسة ترافيل عن فتح باب حجز العمرة لموسم 1445 من الهجرة النبوية الشريفة سائلين اللّه لنا ولكم القبول والاخلاص',
          1000,
          "",
        ]}
        speed={15}
        style={{ whiteSpace: 'pre-line', fontSize: '2.4em', color: 'white' 
        ,marginBottom:'12vh'}}
        repeat={Infinity}
      /></div></Fade></div>
      

      <Fade delay={200}>

     <Khedma img={khedma}para={"تقوم الشركة بتوفير خدمات ذات مستويات عالية لعملائها الكرام كما تتيح لهم فرصة اختيار ما ينسابهم من برامج اقامة و خدمات"} />
     <Flight img={flight}para={"كما لم تنس الشركة توفير خدمة الطيران من والى الحرمين علي متن طائرات مصر للطيران و الخط السعودي للطيران متيحة لعملائها أفضل الخدمات"}/>
    

 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم 10 أيام- 9 ليالي </h1>
    <Mekka title={"فندق مكة"} img={mk} para={"   مدة الاقامة: خمس أيام || الوجبات: بالافطار "}/>
    <Madina title={"شهد المدينة"} img={sm} para={"  مدة الاقامة: أربع أيام || الوجبات: بالافطار " }/> 
    <h1 className='date' >تاريخ الرحلة: من يوم 11 ربيع الثاني 1445 هجري الى 25 ربيع الثاني 1445 هجري</h1>
    <h1 className='date'>تاريخ الرحلة: من يوم 26 أكتوبر 2023 الى 9 نوفمبر 2023</h1>
    <ul>
      <li>سعر الثنائي:57400 جنيه مصري-</li>
      <li>سعر الثلاثي:51250 جنيه مصري-</li>
      <li>سعر الرباعي:46300 جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
      
    <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐⭐ برامج الأربع نجوم 10 أيام- 9 ليالي </h1>
   <Mekka title={"دابل تري أو ما يماثله"} img={tr} para={"   مدة الاقامة: خمس أيام || الوجبات: بالافطار "}/>
   <Madina title={"طيبة أو ما يماثله"} img={ty} para={"  مدة الاقامة: أربع أيام || الوجبات: بالافطار " }/> 
   <h1 className='date' >تاريخ الرحلة: من يوم 11 ربيع الثاني 1445 هجري الى 25 ربيع الثاني 1445 هجري</h1>
   <h1 className='date'>تاريخ الرحلة: من يوم 26 أكتوبر 2023 الى 9 نوفمبر 2023</h1>
   <ul>
     <li>سعر الثنائي:47700 جنيه مصري-</li>
     <li>سعر الثلاثي:42500 جنيه مصري-</li>
     <li>سعر الرباعي:40500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>
 


   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐ برامج الثلاثة نجوم 15 أيام- 14 ليالي </h1>
   <Mekka title={"أبراج الكسوة أو ما يماثله"} img={ka} para={"   مدة الاقامة: خمس ليال || الوجبات: بالافطار "}/>
   <Madina title={"حياة طيبة أو ما يماثله"} img={hty} para={"  مدة الاقامة: تسع ليال || الوجبات: بالافطار " }/> 
   <h1 className='date' >تاريخ الرحلة: من يوم 11 ربيع الثاني 1445 هجري الى 25 ربيع الثاني 1445 هجري</h1>
   <h1 className='date'>تاريخ الرحلة: من يوم 26 أكتوبر 2023 الى 9 نوفمبر 2023</h1>
   <ul>
     <li>سعر الثنائي:31700 جنيه مصري-</li>
     <li>سعر الثلاثي:28900 جنيه مصري-</li>
     <li>سعر الرباعي:27000 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>


     </Fade>
     <Fade delay={200}>
     <div className='prc'>
      تشمل الأسعار السفر علي خطوط الطيران، الانتقالات داخل السعودية بأتوبيسات فاخرة، مزارات مكة و المدينة المنورة و استخراج تأشيرة العمرة بالباركود الخاص
      <h1>تم حساب أسعار البرنامج بناء علي سعر الريال مقدرا بعشر جنيهات و نصف و أي زيادة أو نقصان يتم في عقبه تحديث الأسعار</h1>
     </div>
     </Fade>
     <Fade delay={200}>
      <div className='contct'>
        للاستفسار و التواصل لا تتردد في الاتصال علي الأرقام التالية
        <h3>+201223727127||+201001485673||+201120071663</h3>
        </div>
        </Fade>



    </div>
  );
}

export default App;
