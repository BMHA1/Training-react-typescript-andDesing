import {Menu } from 'antd';
import vector_logo from '../../img/Vector_logo.svg';

const MenuHeaderCenter = (props: any) =>  {

    return (
        <>
             <Menu
                    theme="light"
                    mode="vertical"
                    defaultSelectedKeys={['3']}
                    items={props.images?.map((imagen :any, index:number) => ({
                        key: String(index + 1),
                        label: `nav ${imagen + 1}`,
                      }))}
                />
        </>
    )

}

export default MenuHeaderCenter;