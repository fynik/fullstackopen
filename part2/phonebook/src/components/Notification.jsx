const Notification = ({ message }) => {

    if (message.content === null) {
        return null;
    }

    const successStyle = {
        color: 'green',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const errorStyle = {
        color: 'red',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        background: 'lightgrey',
    }

    const messageStyle = message.success ? successStyle : errorStyle;

    return (
        <div style={messageStyle}>
            {message.content}
        </div>
    )
}

export default Notification;