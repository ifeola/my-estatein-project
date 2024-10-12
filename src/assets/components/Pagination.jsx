import { ArrowLeft, ArrowRight } from "../utils/Icons";
import style from "../styles/pagination.module.css";

const Pagination = ({ pages }) => {
  return (
    <div className={style.pagination}>
      <div>
        <span>0{1}</span> of {pages}
      </div>
      <div className={style.pagination__btns}>
        <button className={style.pagination__btn}>{ArrowLeft}</button>
        <button className={style.pagination__btn}>{ArrowRight}</button>
      </div>
    </div>
  );
};
export default Pagination;
