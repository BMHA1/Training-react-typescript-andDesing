import { Button} from 'antd';
import './ButtonMenuHeader.css'
import vectorLogo from '../../img/vectorLogo.svg';
import lineas3 from '../../img/menu/lineas3.svg';
import apps from '../../img/menu/apps.svg';
import graduationcap from '../../img/menu/graduationcap.svg';
import stats from '../../img/menu/stats.svg';
import hojaLupa from '../../img/menu/hojaLupa.svg';
import interrogation from '../../img/menu/interrogation.svg';
import money from '../../img/menu/money.svg';

const ButtonMenuHeader = (props: any) =>  {

    let iconUp:any=[lineas3,vectorLogo];
    let iconDown:any=[apps,graduationcap,hojaLupa,stats,money,interrogation];

    return (
        <>
        <div >
            <div className='content-menu-up'>
                {iconUp.map((img:string,key:number) => {
                    return(
                        <div className='content-button-img-up'>
                            <Button  type="link" >
                                <img src={img} alt={`img${key}`} key={key} className='img-up'></img>
                            </Button>
                        </div>
                    )
                })}
            </div>
            <div className='content-menu-down'>
                {iconDown.map((img:string,key:number) => {
                    return(
                        <div className='content-button-img'>
                            <Button  type="link" >
                                <img src={img} alt={`img${key}`} key={key}></img>
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )

}

export default ButtonMenuHeader;