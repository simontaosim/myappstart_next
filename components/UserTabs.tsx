
import { NextRouter } from "next/router";
import { Tabs, Tab } from "@material-ui/core";
import { useState, ChangeEvent, useEffect } from "react";

interface IUserTabs {
    activeValue: number,
    router: NextRouter,
}
export default (props: IUserTabs) => {
    const { activeValue, router } = props;
    const [value, setValue ] = useState(activeValue);
    useEffect(()=>{
        setValue(activeValue);
    }, [])
    const handleChange  = async  (_event:ChangeEvent<any>, newValue: number) => {
        setValue(newValue);
        if(newValue === 0) {
            router.push("/login")
        }
        if(newValue === 1){
            router.push("/register")
        }
      };
    return <Tabs value={value} onChange={handleChange}
      indicatorColor="primary"
    textColor="primary"
    centered >
        <Tab label="登录" />
        <Tab label="注册" />
    </Tabs>
}