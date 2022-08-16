import style from "../List.module.scss";

const Item = ({ name, time }: { name: String; time: String }) => {
  return (
    <li className={style.item}>
      <i>X</i>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
