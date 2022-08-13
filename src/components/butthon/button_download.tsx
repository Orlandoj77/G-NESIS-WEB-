import React from "react";
import {Container, Button} from "./style/style"


class Button_footer extends React.Component {
    render() {
      return (
        <div>
          Olá, {this.props.name}!
        </div>
      );
    }
  }


function Button_download (){
    return(
        <>
          <Container>
        <Button> <span>Download</span><i></i></Button>
       </Container>
      
        </>
      
    )
}
export default Button_download;