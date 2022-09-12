import { Button, Modal } from 'antd';
import TableListTicket from '../Components/TableListTicket/TableListTicket';
import { Layout } from 'antd';
import React from 'react';
import './TicketList.css'
import ButtonMenuHeader from '../Components/ButtonMenuHeader/ButtonMenuHeader';

const { Sider } = Layout;

const TicketList: React.FC = () =>  {

    return (
        <>
            <Layout>
                <Sider width={70} className='content-sider'>
                    <ButtonMenuHeader/>
                </Sider>
                <div className='content-main'>
                    <div className='content-presentation'>
                        <h1>
                            Bienvenido de nuevo, Brajin Hanna. 👋
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
