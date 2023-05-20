import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from './MemeGenerator.module.scss'

const MemeGenerator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputsWrapper}>
        <Input />
        <Input />
      </div>
      <Button />
    </div>
  )
}

export default MemeGenerator
