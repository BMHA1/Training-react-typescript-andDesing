import { Button } from 'antd';
import TableListTicket from '../Components/TableListTicket/TableListTicket';
import MenuHeaderCenter from '../Components/MenuHeaderCenter/MenuHeaderCenter';
import { Layout } from 'antd';
import React from 'react';
import './TicketList.css'
const { Sider, Content } = Layout;

const TicketList = () =>  {
    
    let data =[1,2,3,4];
    return (
        <>
            <Layout>
                <Sider width={70}>
                    <MenuHeaderCenter imagen = {data}/>
                </Sider>
                <div className='content-main'>
                    <div className='content-presentation'>
                        <h1>
                            Bienvenido de nuevo, Rodrígo. 👋 
                        </h1>
                        <span>
                            Estas son las personas que han comprado entrada
                        </span>
                    </div>
                    <div className='content-table'> 
                        <TableListTicket/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TicketList;