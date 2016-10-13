const React = require('react');
const PropTypes = React.PropTypes;
const klassName = require('./util/className');

const Modal = React.createClass({
    propTypes: {
        title: PropTypes.element,
        confirmText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        cancelText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        closeIcon: PropTypes.element,
    },

    getInitialState() {
        return {
            display: false, 
        };
    },
    
    getDefaultProps() {
        return {
            confirmText: 'confirm',
            cancelText: 'cancel',
            closeIcon: <span>x</span>,
        };
    },

    open(){
        this.setState({
            display: true
        });
    },

    close(){
        const {onClose} = this.props
        if (onClose && !onClose()) return
        this.setState({
            display: false
        });
    },

    handleConfirm(){
        if (this.props.onConfirm()) this.close();
    },

    handleCancel(){
        if (this.props.onCancel()) this.close();
    },

    render() {
        let {onConfirm, onCancel, confirmText, 
            className, cancelText, title, children,
             style, force, closeIcon} = this.props;

        const {display} = this.state;
        let actionDOM = [];
        if (onConfirm) actionDOM.push(<div key='_confirm-action' className='_action-btn'
                                        onClick={this.handleConfirm}>
                                        {confirmText}
                                    </div>);
        if (onCancel) actionDOM.push(<div key='_cancel-action' className='_action-btn'
                                        onClick={this.handleCancel}>
                                        {cancelText}
                                    </div>);

        let footer = onCancel || onConfirm 
                ? <div className='_actions'>
                    {actionDOM}
                </div> 
                : null; 

        className = klassName('modal', className);

        if (display) {
            className += ' _show';
        }
        if (force) {
            className += ' _force';
        }

        return (
            <div style={style} className={className}>
                <div>
                    <div className="_body">
                        <div className="_wrap">
                            {title ? 
                                <div className="_title">{title}</div>
                                : null}
                            <div className="_content">
                                {children}
                                {footer}
                            </div>
                            {force 
                                ? null
                                : <div className="_close" onClick={this.close}>{closeIcon}</div>}
                        </div>
                    </div>
                    {force 
                        ? <div className="_overlay"></div>
                        : <div className="_overlay" onClick={this.close}></div>
                    }
                </div> 
            </div>
        );
    }
});

module.exports = Modal;