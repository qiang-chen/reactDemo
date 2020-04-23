import React, {Component} from 'react'

const coverStyle = {
    position: 'fixed',
    left: 0, top: 0, bottom: 0, right: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 999,
    transition: 'transform 0.3s'
};
const contentStyle = {
    position: 'absolute',
    left: '10%', right: '10%',
    top: '50%', transform: 'translateY(-50%)',
    backgroundColor: '#fff', borderRadius: 12
};
const minScale = 0.2;


// 高阶组件，生成弹窗
function CreateModal(Content) {
    return class Cover extends Component {
        state = {
            scale: 1,
            display: 'none'
        };
        open = true;
        show = () => {
            this.setState({
                scale: minScale,
                display: 'block'
            }, () => {
                setTimeout(() => {
                    this.open = true;
                    this.setState({scale: 1})
                }, 0)
            })
        };
        close = () => {
            this.open = false;
            this.setState({
                scale: minScale
            })
        };
        transEnd = () => {
            if (!this.open) {
                this.setState({display: 'none'})
            }
        };

        render() {
            window.cover = this;
            let {scale, display} = this.state;
            return <div id="cover"
                        onTransitionEnd={() => this.transEnd()}
                        style={{
                            ...coverStyle,
                            transform: 'scale(' + scale + ')',
                            display: display
                        }}>
                <div style={contentStyle}>
                    <Content show={this.show} close={this.close} {...this.props} />
                </div>

            </div>
        }

        componentDidMount() {
            this.props.getMethod && this.props.getMethod(this.close, this.show);
        }
    }
}

export default CreateModal;
