import React from "react";
import {useNavigation} from 'react-router-dom';
import ReduxForm from "./ReduxForm";

 const OnSubmitHandler =(props)=> {
  const navigation = useNavigation();

  return <ReduxForm navigation={navigation} />;
}

export default OnSubmitHandler;