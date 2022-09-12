import { Button, Modal } from 'antd';
import TableListTicket from '../Components/TableListTicket/TableListTicket';
import { Layout } from 'antd';
import React from 'react';
import './TicketList.css'
import vectorLogo from '../img/vectorLogo.svg';
import lineas3 from '../img/menu/lineas3.svg';
import apps from '../img/menu/apps.svg';
import graduationcap from '../img/menu/graduationcap.svg';
import stats from '../img/menu/stats.svg';
import hojaLupa from '../img/menu/hojaLupa.svg';
import interrogation from '../img/menu/interrogation.svg';
import money from '../img/menu/money.svg';

const { Sider } = Layout;

const TicketList: React.FC = () =>  {

    return (
        <>
            <Layout>
                <Sider width={70} className='content-sider'>
                    <div className='content-menu'>
                        <Button type="link" >
                            <img src={lineas3} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={vectorLogo} alt='tex2'></img>
                        </Button>
                    </div>
                    <div className='content-menu'>
                        <Button type="link" >
                            <img src={apps} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={graduationcap} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={hojaLupa} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={stats} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={money} alt='tex2'></img>
                        </Button>
                        <Button type="link" >
                            <img src={interrogation} alt='tex2'></img>
                        </Button>
                    </div>
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
