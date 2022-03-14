import React from "react";
import Icon from '../../atom /Icon/Icon'
import Text from '../../atom /Text/Text';
import SubText from "../../atom /SubText/SubText";

function IconTextSubtext(props){
    const{text,icon,subText}=props;
    return(
        <div>
            <Icon icon={icon}/>
            <Text text={text}/>
            <SubText subText={subText}/>
        </div>
    )

}
export default IconTextSubtext