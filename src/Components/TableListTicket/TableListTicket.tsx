import { Table , Button,Modal} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import ticketVerde from '../../img/tickeVerde.svg';
import ticketRojo from '../../img/ticket_rojo.svg';
import buttonModal from '../../img/button_modal.svg';
import { APIConsumer } from '../../Api/ApiUser';
import {useDispatch} from 'react-redux';
import '../TableListTicket/TableListTicket.css'
import ModalInfo from '../Modal/ModalInfo';

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

const TableListTicket : React.FC = () =>  {

    const [users , setUsers] = useState<any>([]);
    const [user , setUser] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const columns: ColumnsType<DataType> = [
        {
          dataIndex: 'present',
          render: (row:boolean) =>(row)?(<img src={ticketVerde}></img>):(<img src={ticketRojo}></img>),
        },
        {
          key:'firstName',
          render:(payload:DataType) => {
            return (
                <div className='table-cell'>
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
                <div  className='table-cell'>
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
                <div >
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
              <Button type="link" onClick={()=> showModal(payload)}>
                  <img src={buttonModal}></img>
              </Button>
            )
          }
        },
    ];

    const showModal = (payload:any) => {
      setUser(payload);
      setOpen(true);
    };

    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    };

    const handleCancel = () => {
      setOpen(false);
    };

    useEffect(() => {
        getListUsers();

    }, [])

    const getListUsers = async () => {
        try {
            let res = await APIConsumer.getAllUsers();
            setUsers(res);
        } catch (error) {
            console.log();
        }
    }

    return (
        <>
            <Table columns={columns} dataSource={users} showHeader={false} size='middle'/>
            <Modal 
                width={800}
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <ModalInfo user={user}/>
            </Modal>
        </>
      );

}

export default TableListTicket;