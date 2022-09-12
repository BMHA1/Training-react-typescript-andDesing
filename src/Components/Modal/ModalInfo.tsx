import { Button, Modal } from 'antd';
import ticketVerde from '../../img/tickeVerde.svg';
import ticketRojo from '../../img/ticket_rojo.svg';
import React, { useEffect, useState } from 'react';





const ModalInfo: React.FC<any> = (props) => {

  return (
    <>
     <div className='modal-header'>
                    <div >
                      {(props.user.present)?<img src={ticketVerde}></img>:<img src={ticketRojo}></img>}
                    </div>
                    <div className='modal-title'>
                      <h2>{props.user.firstName}{props.user.lastName}</h2>
                      <span>{props.user.present?'Ha entrado':'No ha entrado'}</span>
                    </div>
                </div>
                <div className='modal-body'>
                  <div className='modal-body-1'>
                    <div>
                      <div><strong>ID</strong></div>
                      <div>{props.user._id}</div>
                    </div>
                    <div>
                      <div><strong>Nº Ticket</strong></div>
                      <div>{props.user.ticket}</div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className='modal-body-2'>
                    <div>
                      <div><strong>Fecha Nacimiento</strong></div>
                      <div>{props.user.birthdate}</div>
                    </div>
                    <div>
                      <div><strong>Email</strong></div>
                      <div>{props.user.email}</div>
                    </div>
                    <div>
                      <div><strong>Télefono</strong></div>
                      <div>{props.user.phone}</div>
                    </div>
                  </div>
                  <div className='modal-body-2'>
                    <div className=''>
                      <div><strong>Dirección</strong></div>
                      <span className='modal-addres'>{props.user.address}</span>
                    </div>
                  </div>
                </div>
    </>
  );
};

export default ModalInfo;