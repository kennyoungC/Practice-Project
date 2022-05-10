import styles from "./Card.module.css"
const Card = (props) => {
  return <div className={`${styles.card} mt-3`}>{props.children}</div>
}

export default Card
