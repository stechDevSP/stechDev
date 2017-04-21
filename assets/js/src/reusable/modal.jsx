import React from 'react';
import ReactDOM from 'react-dom';

var Modal = React.createClass({
    componentDidMount() {
        $(".modal").modal('show');
        $(".modal").on('hidden.bs.modal', this.props.handleHideModal);
    },
    render() {
        return (
                <div className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span>
                                </div>
                                <h4 className="modal-title">{this.props.name}</h4>
                            </div>
                            <div className="modal-body">
                                <p>{this.props.fullDesc}</p>
                                <div className="container">
                                    <div className="col-md-2">
                                        <img src={this.props.pic1} width="100" height="100" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={this.props.pic2} width="100" height="100" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={this.props.pic3} width="100" height="100" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div type="button" className="btn btn-default" data-dismiss="modal">Close</div>
                                <div type="button" className={"btn btn-primary " + this.props.viewSave}>Save changes</div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    },
    propTypes: {
        handleHideModal: React.PropTypes.func.isRequired
    }
});

export class ModalPopup extends React.Component{
    getInitialState() {
        return { view: { showModal: false } }
    }
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };

        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
    }
    handleHideModal() {
        this.setState({ showModal: false });
    }
    handleShowModal() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <div>
                        <div className={this.props.className} onClick={this.handleShowModal}>{this.props.text}</div>
                        {this.state.showModal ? <Modal fullDesc={this.props.fullDescr} name={this.props.titleCard} pic1={this.props.pic1} pic2={this.props.pic2} pic3={this.props.pic3} viewSave={this.props.viewSave}  handleHideModal={this.handleHideModal}/> : null}
                    </div>
        );
    }
}