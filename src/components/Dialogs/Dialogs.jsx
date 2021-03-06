import React from 'react';
import classesDialogs from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={classesDialogs.dialogs}>
             {/*Здесь обёртка*/}


            <div className={classesDialogs.dialogsItems}>
                <div className={classesDialogs.dialog}>Andrey</div>
                <div className={classesDialogs.dialog}>Anton</div>
                <div className={classesDialogs.dialog}>Masha</div>
                <div className={classesDialogs.dialog}>Yarik</div>
                <div className={classesDialogs.dialog}>Oleg</div>
            </div>


            <div className={classesDialogs.messages}>
                <div className={classesDialogs.message}>Hello</div>
                <div className={classesDialogs.message}>Yep</div>
                <div className={classesDialogs.message}>How are you?</div>
            </div>


        </div>
    )
}

export default Dialogs