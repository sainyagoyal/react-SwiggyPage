import React from "react";
import Icon from '../../atom /Icon/Icon'
import Text from '../../atom /Text/Text';
function IconText (props){
    let {icon,text} =props;
    
        
    return(
        <div> 
            <Icon icon={icon}/>
            <Text  text={text}/>

        </div>
    )
}
export default IconText;