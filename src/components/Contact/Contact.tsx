import { useAppSelector } from "../../redux/hooks/hooks";


const Contact = () => {

  const test = useAppSelector(state => state.general.test)

  return(
    <div>
      Contact {test}
    </div>
  )
};

export default Contact;