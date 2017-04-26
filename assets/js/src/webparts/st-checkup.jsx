import React from 'react';

export class StCheckUp extends React.Component {
    constructor(props) {
        super(props);
        var self = this;
    }
    componentDidMount() {

 var res = $http.post(configuration.serviceUrlHost + configuration.crudServiceBaseUrlbikeLoginUser, dataObj);


    }
    render() {
        return (
            <div className="appST stCheckUp_app">
                        <div className="title-myApp"> 
                        ST CHECKUP
                        </div> 
                    </div>

        );
    }
}
