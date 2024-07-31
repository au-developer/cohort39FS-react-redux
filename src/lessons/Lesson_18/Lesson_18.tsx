//8-7 импорт


// 5-4 импорт айдишек
import { v4 } from "uuid"
//5-9 импорт юсеффекта, для отслеживания появления ошибки
import { useEffect } from "react"
// 5-1 импорт хуков для отправки и подписки
import { useAppDispatch, useAppSelector } from "store/hooks"
// 5-2 импорт екшенов и селекторов
import {
    catFactSelectors,
    catFactsActions,
  } from "store/redux/catFact/catFactSlice"

  //5-6 импорт типизации
import { CatFact } from "store/redux/catFact/types";
// шаг-2 импорт берток
import { PageWrapper, CatFactCard, CatFactsContainer, CatFactText, CatFactWrapper, ButtonControl } from "./styles";
// шаг-2 импорт кнопки
import Button from "components/Button/Button";



function Lesson_18 (){
    
    //5-3 разпаковка хуков
    const dispatch = useAppDispatch()
    const catFacts = useAppSelector(catFactSelectors.catFacts)
    const error = useAppSelector(catFactSelectors.error)



//шаг-3 функция для кнопки
// 7-1 вызов диспатча в функции 
const getCatFact = ()=>{
dispatch(catFactsActions.getCatFact("Some Data"))
}

// 5-5  создание массива для хранения фактов
//5-6 типизация
const catFactsParagraphs = catFacts.map((catFact:CatFact, index:number)=>{
    // 5-7 пропсом прокидываем в оббертку КетФектТекст ключ в4, а между тегами вставляем конкретный факт
    //8-4 добавим оббертки 2 последние из стилей пропишем кнопку
    return (
    <CatFactWrapper>и 
    <CatFactText key={v4()}>
      {`${index + 1}.`}
        {catFact.fact}
        </CatFactText>
        <ButtonControl><Button
            isRed
            name="Delete"
            onClick={() => {
              dispatch(catFactsActions.deleteCatFact(catFact.id))
            }}
          /></ButtonControl>
        </CatFactWrapper>)
})
//5-9 вызов юс еффекта, для отлова ошибки, происходит только если появляется ошибка- перерендер компонента
useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])


   // 5-8 условный рендеринг для вывода фактов
    return <PageWrapper>
        <CatFactCard>
            <CatFactsContainer>
             {catFacts.length >0 && catFactsParagraphs}
            </CatFactsContainer>
            <Button name="Get Cat Fact" onClick={getCatFact}/>
        </CatFactCard>
    </PageWrapper>
}

export default Lesson_18;