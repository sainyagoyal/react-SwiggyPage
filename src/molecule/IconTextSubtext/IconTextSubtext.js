import React from "react";
import Icon from '../../atom /Icon/Icon'
import Text from '../../atom /Text/Text';

function IconTextSubtext(props){
    const{text,icon,subText}=props;
    return(
        <div>
            <Icon icon={icon}/>
            <Text text={text}/>
            <div>{subText}</div>
        </div>
    )

}
export default IconTextSubtext