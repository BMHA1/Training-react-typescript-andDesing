import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import ticketVerde from '../../img/tickeVerde.svg';
import ticketRojo from '../../img/ticket_rojo.svg';
import vectorLogo from '../../img/vector_logo.svg';
import buttonModal from '../../img/button_modal.svg';
import { APIConsumer } from '../../Api/ApiUser';
import '../TableListTicket/TableListTicket.css'

interface DataType {
    address: string;
    birthdate: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    present: boolean;
    ticket: number;
    _id: string;

}


const handleModal =(hola :any)=>{
    console.log(hola);
}

const columns: ColumnsType<DataType> = [
    {
      dataIndex: '',
      render: () =>(<img src={vectorLogo}></img>),
    },
    {
      dataIndex: 'present',
      render: (row:boolean) =>(row)?(<img src={ticketVerde}></img>):(<img src={ticketRojo}></img>),
    },
    {
      key:'firstName',
      render:(payload:DataType) => {
        return (
            <div>
                <h3>
                    {payload.firstName} {payload.lastName}
                </h3>
                <span>
                    {!payload.present ? 'No ha entrado':'Ha entrado'}
                </span>
            </div>
        );
      }
    },
    {
      dataIndex: '_id',
      render:(row:string) => {
        return (
            <div>
                <h3>
                    ID
                </h3>
                <span>
                    {row}
                </span>
            </div>
        );
      }
    },
    {
      dataIndex: 'ticket',
      render:(row:string) => {
        return (
            <div>
                <h3>
                    Nº Ticket
                </h3>
                <span>
                    {row}
                </span>
            </div>
        );
      }
    },
    {
      render: (payload) =>{
        return(
            <button onClick={()=> handleModal(payload)}>
                <img src={buttonModal}></img>
            </button>
        )
      }
    },
  ];


const TableListTicket = () =>  {

    const [user , setuser] = useState([]);

    useEffect(() => {
        getListUsers();
    }, [])

    const getListUsers = async () => {

        try {
            let res = await APIConsumer.getAllUsers();
            setuser(res);
            console.log(res);
        } catch (error) {
            console.log();
        }
    }


    return (
        <div>
            <Table columns={columns} dataSource={user} showHeader={false} bordered
            />
        </div>
      );

}

export default TableListTicket;