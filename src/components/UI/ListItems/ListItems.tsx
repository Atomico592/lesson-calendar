import homeIcon from "../../../assets/icons/listIcons/home.png"
import calendarIcon from "../../../assets/icons/listIcons/calendar.png"
import waletIcon from "../../../assets/icons/listIcons/walet.png"
import сupIcon from "../../../assets/icons/listIcons/Сup.png"
import puzzleIcon from "../../../assets/icons/listIcons/puzzles.png"
import folderIcon from "../../../assets/icons/listIcons/folder-open.png"
import supportIcon from "../../../assets/icons/listIcons/Headphones, Customer, support.png"
import gearIcon from "../../../assets/icons/listIcons/Group.png"
import questionIcon from "../../../assets/icons/listIcons/question-3-circle.png"
import "./ListItems.scss"

const ListItems = () => {
    return (
        <div className="list-items">
            <ul>
                <li className="list-items__li-component"><img src={homeIcon} alt="home"/> Главная</li>
                <li className="list-items__li-component"><img src={calendarIcon} alt="calendar"/> Расписание</li>
                <li className="list-items__li-component"><img src={waletIcon} alt="walet"/> Оплата</li>
                <li className="list-items__li-component"><img src={сupIcon} alt="cup"/> Достижения</li>
                <li className="list-items__li-component"><img src={puzzleIcon} alt="puzzle"/> Тренажеры</li>
                <li className="list-items__li-component"><img src={folderIcon} alt="folder"/> Библиотека</li>
                <li className="list-items__li-component"><img src={supportIcon} alt="headphones"/> Провекра связи</li>
                <li className="list-items__li-component"><img src={gearIcon} alt="gear"/> Настройка</li>
                <li className="list-items__li-component"><img src={questionIcon} alt="question"/> Вопросы</li>
            </ul>
        </div>
    );
};

export default ListItems;