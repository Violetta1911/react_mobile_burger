import React from 'react';

class Shipment extends React.Component {
   
    render() {
        const { total } = this.props;
        const shipping = total > 0 && total < 500 ? 350 : 99;
        const shippingNeon = shipping === 99 ? (
            <span className = 'font-effect-neon total_wrap-cheap'>
                {shipping}  ₽
            </span>

        ) : (
            <span>{shipping}  ₽</span>
        );
        return(
            <div className = 'total'>
                <div>
                    <div>Shipment: {total >0 ? shippingNeon : null}</div>
                    <div className= 'total_wrap-free'>
                        {total <500 ? 
                        `Order for ${500 - total}  ₽ to delivery for 99 ₽` 
                    : null } 
                        </div>
                </div>
                    <div className = 'total_wrap'>
                        <div className = 'total_wrap-final'>
                            Total:  {total} ₽
                        </div>

                    </div>
                </div>         

        )
    }
};

export default Shipment;