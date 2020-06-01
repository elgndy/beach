import React ,{Component} from "react";
import Title from './Title';
import {FaAccessibleIcon , FaAndroid , FaEmpire , FaFortAwesome} from 'react-icons/fa';
class Services extends Component {
    state = {
        services : [
            {
                icon : <FaAccessibleIcon />,
                title : 'Free Cocktails',
                 info :
                  "lorem ipsum dolor sin amet consutrsa adhdsacation elit magin corocipt"
            },
            {
                icon : <FaAndroid />,
                title : 'Endel Hiking',
                 info :
                  "lorem ipsum dolor sin amet consutrsa adhdsacation elit magin corocipt"
            },
            {
                icon : <FaEmpire />,
                title : 'Free Shattlevan',
                 info : 
                 "lorem ipsum dolor sin amet consutrsa adhdsacation elit magin corocipt"
            },
            {
                icon : <FaFortAwesome />,
                title : 'Free Beering',
                 info : 
                 "lorem ipsum dolor sin amet consutrsa adhdsacation elit magin corocipt"
            }
        ]
    }
    render(){
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                {this.state.services.map((item , index) => {
                return(
                    <article key="index" className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
                </div>
            </section>
                )
    }
}

export default Services;